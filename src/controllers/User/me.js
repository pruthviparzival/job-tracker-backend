import ApiResponse from "../../utils/ApiResponse.js";

export const getCurrentUser = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res
        .status(401)
        .send(new ApiResponse(401, null, "Not authenticated"));
    }

    res
      .status(200)
      .send(new ApiResponse(200, user, "User retrieved successfully"));
  } catch (error) {
    console.log("Error in getCurrentUser controller", error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to retrieve user"));
  }
};
