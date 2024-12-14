import mongoose from "mongoose"


const ClientSchema = new mongoose.Schema({
    image: {type:String , required : true}, 
    name : {type :String , required : true} , 
    Description : {type : String ,required :true}, 
    Designation  :{type:String , required :true}
})  

 export const Client = mongoose.model("Client" ,ClientSchema )