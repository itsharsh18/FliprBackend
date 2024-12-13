import mongoose from "mongoose";

const ProjectScheama = new mongoose.Schema({
    image: {type:String , required : true}, 
    Name : {type :String , required : true} , 
    Description : {type : String ,required :true}
})  



export const Project = mongoose.model("Project" ,ProjectScheama )





// 