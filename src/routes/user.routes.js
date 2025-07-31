// routes/userRoutes.js
import express from 'express';
import { registerUser } from '../controllers/user.controllers.js'; // Make sure this exists and is correct

const router = express.Router();

router.route('/register').post(registerUser);

export default router;


