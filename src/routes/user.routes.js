// routes/userRoutes.js
import express from 'express';
import { registerUser } from '../controllers/user.controllers.js'; 
import {upload} from '../middleware/multer.middleware.js';
import { registerUserValidator } from '../../validators/user.validator.js';  
import { validate } from '../middleware/validator.js';


const router = express.Router();

router.route('/register').post(
   upload.fields([
      {
         name:'avatar',
         maxCount: 1 // Limit to one avatar image
      },{
         name:'coverImage',
         maxCount: 1 // Limit to one cover image   
      }
]
   )
   , registerUserValidator, validate,registerUser
); // Use upload middleware for file upload

export default router;


