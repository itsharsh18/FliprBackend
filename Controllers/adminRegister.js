import { Admin } from "../Model/AdminModel.js";
export const adminRegister = async (req, res) => {
  try {
    const { username, password, email, fullName } = req.body;

    // Check if all fields are provided
    if (!username || !password || !email || !fullName) {
      return res.status(400).json({
        message: "Please fill in all fields", // Fixed typo here
      });
    }

    // Check if user already exists
    const existingUser = await Admin.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists", // Fixed typo here
      });
    }

    // Create a new admin user
    const admin = await Admin.create({
      username,
      password,
      email,
      fullName,
    });

    return res.status(201).json({
      message: "Admin registered successfully",
      admin,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};


export const logiNController = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if email or password is missing
      if (!email || !password) {
        return res.status(400).json({ message: "Please provide both email and password" });
      }
  
      // Find user by email
      const existingUser = await Admin.findOne({ email });
  
      // If user is not found
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if password is correct
      const isPasswordValid = await existingUser.isPasswordCorrect(password);
  
      // If password is incorrect
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      // Select all user details except the password
      const loggedInUser = await Admin.findById(existingUser._id).select("-password");
  
      // Return the user details
      return res.status(200).json({
        message: "Logged in successfully",
        user: loggedInUser,
      });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Something went wrong, please try again" });
    }
  };