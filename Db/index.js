import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://itsharsh:Harsh2003@cluster0.la5sgs1.mongodb.net/FliprTech")
    console.log(connectionInstance.connection.host);
    
    } catch (error) {
console.log(error);

    }
}