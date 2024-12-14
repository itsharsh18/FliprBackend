import mongoose from "mongoose";

const NewsLetterSchema = mongoose.Schema({
  email: {
    type: String,
    required: true, 
  },
});

// Create model
const NewsModel = mongoose.model("newsLetter", NewsLetterSchema);

// Export the model
export default NewsModel;
