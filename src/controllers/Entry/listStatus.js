import { Entry } from "../../models/entry.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const listEntryStatus = async (req, res) => {
  try {
    const { user, status } = req.params;
    const query = { user };

    if (!user) {
      return res
        .status(400)
        .send(
          new ApiResponse(400, null, "User ID is required to list entries.")
        );
    }

    if (status) {
      query.status = status;
    }

    const entries = await Entry.find(query);

    res
      .status(200)
      .send(
        new ApiResponse(
          200,
          entries,
          "Entries of given status retrieved successfully."
        )
      );
  } catch (error) {
    console.error("Error in list entry controller:", error);
    res
      .status(500)
      .send(new ApiResponse(500, null, "Failed to retrieve entries."));
  }
};
