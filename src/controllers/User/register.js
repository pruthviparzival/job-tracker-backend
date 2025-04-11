import bcrypt from "bcrypt";
import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import generateTokenAndSetCookie from "../../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res
        .status(409)
        .send(new ApiResponse(409, null, "This email is already registered."));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    generateTokenAndSetCookie(createdUser._id, res);

    res
      .status(201)
      .send(new ApiResponse(201, createdUser, "User registered succesfully."));
  } catch (error) {
    console.log("Error in register controller", error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to register the user."));
  }
};
