import {body} from 'express-validator';
import {User} from '../models/user.model.js'; 

const registerUserValidator = [
  body('username')
  .notEmpty().withMessage('username is required')
  .isLength({min:3,max:15}).withMessage('username must be between 3-15 characters long')
  .matches(/^[a-zA-Z0-9]+$/).withMessage('username must contain only alphanumeric characters')
  .custom(async (value) => {
    const user = await User.findone({ username: value });
    if (user) {
      throw new error('Username already exists');
    }
      return true;
   }),



  body('email')
   .notEmpty().withMessage('email is required')
   .isEmail().withMessage('Please provide a valid email address')
    .custom(async (value) => {
      const user = await User.findone({ email: value });
      if (user) {
         throw new Error('Email already exists');
      }
      return true; 
   }
),


   body('password')
   .notEmpty().withMessage('password is required')
   .isLength({min:6,max:15}).withMessage('password must be between 6-15 characters long'),

];

export { registerUserValidator };
