import NewsModel from "../Model/NewsLetter.js";

export const newsLetter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Hey gimme the email, what are you doing?",
      });
    }

    const emailRef = await NewsModel.create({ email });
    await emailRef.save();

    return res.status(201).json({
      message: "Happy happy happy! Subscription successful.",
      emailRef,
    });
  } catch (error) {
    console.error("Error saving email:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
