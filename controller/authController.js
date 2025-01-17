import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import sendEmail from '../utils/email.js';

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

export const signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  console.log(newUser);

  // Send welcome email
  const message = `Welcome to Recipe Hub, ${newUser.name}!\n\n We're thrilled to have you join our community of food enthusiasts. At Recipe Hub, you can explore a vast collection of recipes, share your own culinary creations, and connect with other passionate cooks.\n\nIf you have any questions or feedback, feel free to reach out to us. We value your opinion and are here to assist you.
  \n\nHappy cooking!\n\nBest regards,\nThe Recipe Hub Team
  `;

  try {
    await sendEmail({
      email: newUser.email,
      subject: 'Welcome to Recipe Hub!',
      message,
    });
  } catch (err) {
    console.log('Error sending email:', err);
    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }

  createSendToken(newUser, 201, res);
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password!', 401));
  }

  createSendToken(user, 200, res);
});

export const logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully!',
  });
};

export const updateUser = catchAsync(async (req, res, next) => {
  const UpdatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: 'success',
    data: {
      user: UpdatedUser,
    },
  });

  const message = `Hello ${UpdatedUser.name},\n\nYour profile details have been successfully updated. You can continue exploring and sharing delicious recipes on Recipe Hub.\n\nBest regards,\nThe Recipe Hub Team`;

  try {
    await sendEmail({
      email: UpdatedUser.email,
      subject: 'Profile Updated!',
      message,
    });
  } catch (error) {
    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});

export const forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError('There is no user with that email address.', 404));
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password?\n\n Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\n\nIf you didn't forget your password, please ignore this email!\n\nBest regards,\nRecipe Hub Team`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 min)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});

export const resetPassword = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  createSendToken(user, 200, res);

  const message = `Hello ${user.name},\n\nYour password has been successfully reset. You can now log in to Recipe Hub with your new password.\n\nBest regards,\nThe Recipe Hub Team`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password Reset Successfully!',
      message,
    });
  } catch (error) {
    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});

export const updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  // Check if posted current password is correct
  if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
    return next(new AppError('Your current password is incorrect', 401));
  }

  // If so, update the password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // Log user in, send JWT
  createSendToken(user, 200, res);

  const message = `Hello ${user.name},\n\nYour password has been successfully updated. You can continue exploring and sharing delicious recipes on Recipe Hub.\n\nBest regards,\nThe Recipe Hub Team`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password Updated',
      message,
    });
  } catch (error) {
    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});
