import { v2 as cloudinary } from 'cloudinary'

import fs from 'fs';
import path from 'path';


    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

   
const uploadOnCloudinary = async (filePath) => {
    try {
      if(!filePath) return null;
     // upload the file on cloudinary
    const response=await cloudinary.uploader.upload(filePath,{
      resource_type: 'auto',
    })
    //file has been uploaded successfully
 console.log("File uploaded successfully",response.url);
      return response.url;
      } catch(err){
         fs.unlinkSync(filePath);//remove locally uploaded file
         console.error("Error uploading file to Cloudinary:", err);

      }
   }


export {uploadOnCloudinary};