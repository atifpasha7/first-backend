import mongoosse,{schmea} from 'mongoose';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';


const videoSchema = new mongoose.Schema({
   videoFile:{
      type:string, //cloudinary url
      required: true,
   },
   thumbnail:{
      type: String, 
      required: true,
   },
   title:{
      type: String,
      required: true,
   },
   description:{
      type: String,
      required: true,
   },
   duration:{
      type:Number,
      required:true,
   },
   views:{
      type:Number,
      default:0,
   },
   isPublished:{
      type:Boolean,
      default:true,
   },
   owner:{
      type:Schema.Type.ObjectId,
      ref: 'User',
   }


},{timestamps: true});
   


export const Video = mongoose.model('Video', videoSchema);