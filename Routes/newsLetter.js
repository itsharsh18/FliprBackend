import express from "express";
import {newsLetter} from "../Controllers/NewsLetter.js";

const app = express.Router();

// Define POST route for newsletter
app.post("/newsLetterscene", newsLetter);

export default app;
