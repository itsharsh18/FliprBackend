import { Client } from "../Model/Client.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const TestiMonialRegister = (async(req,res)=>{
  try {
     const {  name , Designation,Description} = req.body; 
     console.log(name);
     console.log(Description);
     console.log(Designation);
     if( !name || ! Designation || ! Description) return res.status(401).send({message : "Plz provide al fields"})
          
            const ClientImage = req.files?.avatar[0].path;
  
          if(!ClientImage)return res.status(401).json({message : "NAa naa naa"})
              const avatar = await uploadOnCloudinary(ClientImage)
          if(!avatar) return res.status(401).json({message : "Bro u have to give the image"})
              console.log(avatar);
  
          const prodcuts = await Client.create({
              image : avatar.url, 
              name , 
              Designation , 
              Description
  
          })
          res.status(201).send({
              prodcuts ,
              message: "Testimonail uploaded secuuesfully"
          })
  } catch (error) {
    console.log(error);
    
  }

})




export const GetAlltestimonials = (async(req,res)=>{
    const theTestimonialsData = await Client.find({});
    return res.status(201).json({
        message: "Hers all ur user" , 
        theTestimonialsData
    })
})