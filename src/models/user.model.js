import mongoose, {schema} from 'mongoose';

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 15,
      index: true
   },
   email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
   },
   fullName: {
      type: String,
      required: true,
      trim: true,
      index:true
   },
   avator:{
      type: String,
      required:true,
   
   },
   coverImage:{
      type: String,
      
},
watchHistory:[
{
   type:Schema.Type.ObjectId,
   ref: 'Video'

}],
password:{
   type: String,
   required: [true, 'password is required'],
   minlength: 6
},
refreshToken: {
   type: String,
   
}},{timestamps: true});


userSchema.pre('save',async function(next){
   if(!this.isModified('password')) return next();
   //hash the password
   this.password=await bcrypt.hash(this.password,10);
   next();  

})












export const User = mongoose.model('User', userSchema);
