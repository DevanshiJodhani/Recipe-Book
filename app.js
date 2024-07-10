import express from 'express';
import cookieParser from 'cookie-parser';
import AppError from './utils/appError.js';
import { globalErrorHandler } from './controller/errorController.js';

// ALL ROUTES FILE
import userRoute from './routes/userRoutes.js';

const app = express();

// MIDLEWARE TO PARSE JSON
app.use(express.json());

// MIDLEWARE FOR COOKIES
app.use(cookieParser());

// ROUTES
app.use('/api/v1/users', userRoute);

// HANDALING UNHANDLE ROUTES
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`));
});

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

export default app;
