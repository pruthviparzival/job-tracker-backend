import ApiResponse from "../../utils/ApiResponse.js";

export const logoutUser = (req, res) => {
  try {
    // cookies thing.
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res
      .status(200)
      .send(new ApiResponse(200, null, "User logged out successfully"));
  } catch (error) {
    console.log("Error in logout controller", error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to logout the user."));
  }
};
