import express from "express"
import { adminRegister, logiNController } from "../Controllers/adminRegister.js";

const router = express.Router(); 

router.post('/register' , adminRegister)
router.post('/login' , logiNController)

export default router ; 
