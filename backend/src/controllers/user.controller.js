import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      console.log("All Fields required");
      res.status(400).json({
        message: "All Fields are required",
      });
    }

    // Check if there is already an email registered
    const existing = await User.findOne({ email: email.toLowerCase() });

    if (existing)
      return res
        .status(400)
        .json({ message: "User already exists. Please Login" });

    // Create a User
    const user = await User.create({
      username,
      email,
    });

    res.status(201).json({
      message: "User Created",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Sever Error",
      error,
    });
  }
};

export { registerUser };
