import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
       
    },
},{
    timestamps:true
});

//Hashing b4 saving

userSchema.pre('save', async function(next) {
    try {
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
      // Hash the password with the salt
      const hashedPassword = await bcrypt.hash(this.password, salt);
      // Set the hashed password as the user's password
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });
//To check if entered password matches with the password in database during login
  userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
  }

const User = mongoose.model('User',userSchema);
export default User;