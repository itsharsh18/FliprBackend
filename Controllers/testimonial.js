import { Client } from "../Model/Client.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const TestiMonialRegister = (async(req,res)=>{
  try {
     const {  Name , Desigation,Description} = req.body; 
     console.log(req.Name);
     console.log(req.Description);
     console.log(req.Desigation);
     if( !Name || ! Desigation || ! Description) return res.status(401).send({message : "Plz provide al fields"})
          
            const ClientImage = req.files?.avatar[0].path;
  
          if(!ClientImage)return res.status(401).json({message : "NAa naa naa"})
              const avatar = await uploadOnCloudinary(ClientImage)
          if(!avatar) return res.status(401).json({message : "Bro u have to give the image"})
              console.log(avatar);
  
          const prodcuts = await Client.create({
              image : avatar.url, 
              Name , 
              Desigation , 
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
    const theTestimonialsData = await Client.find({}).select('-_idx');
    return res.status(201).json({
        message: "Hers all ur user" , 
        theTestimonialsData
    })
})