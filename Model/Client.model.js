import mongoose from "mongoose"


const ClientSchema = new mongoose.Schema({
    image: {type:String , required : true}, 
    Name : {type :String , required : true} , 
    Description : {type : String ,required :true}, 
    Desigation  :{type:String , required :true}
})  

 export const Client = mongoose.model("Client" ,ClientSchema )