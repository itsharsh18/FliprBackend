// Project’s Image
// 2. Project’s Name
// 3. Project’s Description

import { Project } from "../Model/Project.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


// Project image orntend se ayegi theke fir PProject ak name as well and then Project ka desc as well cool !!

export const ProjectController = (async(req , res)=>{
    try {
        const {Name , Description} = req.body; 
        console.log(Name);
        console.log(Description);
        
        
        if(!Name || ! Description) return res.status(401).json({
            message: "Nope gimme all the entries"
        })
        const ProductIImage = req.files?.productimage[0].path;
        console.log(ProductIImage); // logging the sustem path of  image 
        
    if(!ProductIImage) return res.status(401).send({message:  "Please select the image"})
    
    // if m getting the image then save that in cloudinary bucket naah! 
    
    const avatarImage = await uploadOnCloudinary(ProductIImage) // it will return the url in which the image is sitred at cloudinary bucket 
    
            console.log(avatarImage);
            const projec = Project.create({
                Name , 
                Description , 
                image : avatarImage.url
            })
            return res.status(201).json({message :"Cool all  things up"})
                
    } catch (error) {
        console.log(error);
        
    }
        
})



export const GetAllProjjectData = async(req,res)=>{
        const theProjectData = await Project.find({});
        
        return res.status(201).json({message : "HEres ur data ," , theProjectData})
}
