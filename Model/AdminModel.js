import mongoose from "mongoose";
import bcrypt from "bcrypt"

const AdminSchema = new mongoose.Schema({
username: {
    type:String , 
    reuired: true , 
    unique: true 
},
email:{
    type: String , 
    required :true
},  
fullName: {
type : String , 
required: true
},
password : {
    type : String , 
required: true
}

} , {timestamps:true})


AdminSchema.pre("save" , async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password , 10);
    next()
})


AdminSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password  , this.password)
}


export const Admin = mongoose.model("Admin" , AdminSchema)