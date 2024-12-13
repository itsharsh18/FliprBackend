import {upload} from '../middlewares/clodudinary.midddleware.js'

import { TestiMonialRegister , GetAlltestimonials } from '../Controllers/testimonial.js'
import express from "express"
import {Client} from '../Model/Client.model.js'

const router = express.Router()


router.post("/testimonials" , upload.fields([{name : "avatar" , maxCount:1}]) ,TestiMonialRegister)
router.get("/getTestimonials" , GetAlltestimonials)




export default router;