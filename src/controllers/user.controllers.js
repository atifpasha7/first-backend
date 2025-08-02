import {asyncHandler} from  '../utils/asynchandler.js';
import {ApiError} from '../utils/apiError.js';
import {validate} from '../middleware/validator.js';
import {uploadOnCloudinary} from './service/cloudinary.js';
import { User } from '../models/user.model.js';
import { ApiResponse } from '../utils/apiResponse.js';






const registerUser = asyncHandler(async (req, res) => {


  //get user details from frontend
  //validate details-not empty
  //check if user already exists-username,email
   //check for cover image and avatar
   //upload tem to cloudinary,avatr
   //create user object-create entry in database
   //remove password and refresh token from response
   ////check for creation 
   //return response
   const { username, email, password } = req.body;
   console.log("User registration details:", username);

   if(!username || !email || !password) {

      throw new ApiError(400,"Please provide all required fields: username, email, and password.");
   } else {
      // Here you would typically check if the user already exists in the database
      // and handle the file uploads using the multer middleware.
      // For now, let's just return a success message.
      res.status(201).json({
         message: "User registered successfully",
         user: {
            username,
            email
         }
      });
   }
   const avatarlocalPath=req.files? req.files['avatar'][0].path: null;
   const coverImagelocalPath=req.files? req.files['coverImage'][0].path: null;

   if(!avatarlocalPath && !coverImagelocalPath) {
      throw new ApiError(400,"Please provide at least one image: avatar or cover image.");
   }

   const avatarimage=await uploadOnCloudinary(avatarlocalPath);
   const coverImage=await uploadOnCloudinary(coverImagelocalPath);

   if(!avatarimage && !coverImage) {
      throw new ApiError(500,"Error uploading images to Cloudinary.");
   }

const user= await  User.create({
      username:username.tolowerCase().trim(),
      email,
      password, // Ensure to hash the password before saving in production
      avatar: avatarimage.url,
      coverImage: coverImage.url
   })

   const createduser=await User.findById(user._id).select(
      ("-password -refreshToken")


   )

   if(!createduser){
      throw new ApiError(500,"sonething went wrong while registering")

   }

   return res.status(201).json(
      new ApiResponse(201,createduser,"user registered successfully")
   )
   
});

export {registerUser};