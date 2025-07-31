// import mongoose from 'mongoose';
// import {db_name} from './src/constants.js';

// import express from 'express';
// const app = express();
// import dotenv from 'dotenv';
// dotenv.config();

// ;(async ()=>{
//    try{
//       console.log('Connecting to:', `${process.env.MONGODB_URI}/${db_name}/${process.env.PORT}`);
//    await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
//     app.on('error', (err) => {
//       console.error('Mongoose connection error:', err);})
//    app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//    })
//    } catch(err){
//       console.error("error connecting to MongoDB:", err);
//    }
// })()


import connectdb from './db/index.js';
import express from 'express';
import dotenv from 'dotenv';
import { app } from './app.js';

dotenv.config({
  path: './.env'
});

(async () => {
   try {
      await connectdb();
      app.listen(process.env.PORT, () => {
         console.log(`Server is running on port ${process.env.PORT}`);
        
      });
   } catch (err) {
      console.error("Error starting the server:", err);
   }
})();

