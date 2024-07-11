import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import AppError from './utils/appError.js';
import { globalErrorHandler } from './controller/errorController.js';

// ALL ROUTES FILE
import userRoute from './routes/userRoutes.js';

const app = express();

app.use(
  cors({
    origin: 'https://myrecipehub.netlify.app',
    credentials: true,
  })
);

// MIDLEWARE TO PARSE JSON
app.use(express.json());

// MIDLEWARE FOR COOKIES
app.use(cookieParser());

// Develpment Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ROUTES
app.use('/api/v1/users', userRoute);

// HANDALING UNHANDLE ROUTES
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`));
});

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

export default app;
