import bcrypt from "bcrypt";
import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import generateTokenAndSetCookie from "../../utils/generateToken.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(404)
        .send(
          new ApiResponse(404, null, "User with given credentials not found.")
        );
    }

    const check = await bcrypt.compare(password, existingUser.password); // returns a boolean.
    if (!check) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Invalid credentials."));
    }

    // to login the user, generate the token.
    generateTokenAndSetCookie(existingUser._id, res);

    res
      .status(200)
      .send(new ApiResponse(200, existingUser, "User logged in successfully."));
  } catch (error) {
    console.log("Error in login controller", error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to login the user."));
  }
};
