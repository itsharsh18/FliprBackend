import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { adminRegister,  logiNController } from './Controllers/adminRegister.js';
import { connectDB } from './Db/index.js';
import userRoute from "../Backend/Routes/user.route.js"
import TestimonialRoute from "../Backend/Routes/testimonial.route.js"
import prjectImage from "../Backend/Routes/ProductRoute.js"

const app = express();  

connectDB()

// Middleware
app.use(cors());
app.use(express.json()); // This automatically parses the incoming JSON
app.use(express.urlencoded({ extended: true })); // If you're also expecting URL-encoded data

// Alternatively, if using body-parser package (not necessary if you use `express.json()`)


// Routes
app.use("/api/v1/user", userRoute);  // Assuming adminRegister is a POST handler
// Connect to MongoDB and start the server

// routes for testmonials 
app.use("/api/v1" , TestimonialRoute)


// Product route handlers 
 app.use("/api/v1/ProductController" ,prjectImage )
 
 
 app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
