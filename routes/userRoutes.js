import express from 'express';
import {
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  updatePassword,
  updateUser,
} from '../controller/authController.js';
import { protect } from '../utils/protect.js';
import { getAllUsers, getMe, getUser } from '../controller/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.get('/login', login);
router.get('/logout', logout);

router.patch('/updateUser', protect, updateUser);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.patch('/updatePassword', protect, updatePassword);

// usercontroller routes
router.route('/allUser').get(protect, getAllUsers);
router.route('/getMe').get(protect, getMe, getUser);
router.route('/:id').get(protect, getUser);

export default router;
