import express from "express"
import { upload } from "../middlewares/clodudinary.midddleware.js"
import { ProjectController ,  GetAllProjjectData } from "../Controllers/product.controller.js"
const app = express.Router()
 
app.post("/productData" , upload.fields([{name: "productimage" , maxCount : 1}]) , ProjectController)
app.get("/GetAllProjjectData" , GetAllProjjectData)
export default app;