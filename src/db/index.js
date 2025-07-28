import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({
   path:'./.env'
});
import {db_name} from '../constants.js';

const connectdb=async () => {
   try{
      // Ensure the connection string is valid and starts with the correct scheme
      const mongoUri = process.env.MONGODB_URI.startsWith('mongodb')
        ? process.env.MONGODB_URI
        : `mongodb://${process.env.MONGODB_URI}`;
      const connin=await mongoose.connect(`${mongoUri}/${db_name}`);
      console.log('MongoDB connected:', connin.connection.host);
     
   }catch(err){
      console.error("error connecting to MongoDB:", err);
      process.exit(1);
   }}

export default connectdb;