import express from 'express';
import {
  forgotPassword,
  login,
  logout,
  resetPassword,
  signUp,
  updatePassword,
  updateUser,
} from '../controller/authController.js';
import { protect } from '../utils/protect.js';
import { getAllUsers, getMe, getUser } from '../controller/userController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/logout', logout);

router.patch('/updateUser', protect, updateUser);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.patch('/updatePassword', protect, updatePassword);

// usercontroller routes
router.get('/getMe', protect, getMe);
router.get('/allUser', protect, getAllUsers);
router.get('/:id', protect, getUser);

export default router;
