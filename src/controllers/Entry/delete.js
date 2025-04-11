import { Entry } from "../../models/entry.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const deleteEntry = async (req, res) => {
  try {
    const { entryId } = req.params;

    if (!entryId) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Entry ID is required."));
    }

    const deletedEntry = await Entry.findByIdAndDelete(entryId);

    if (!deletedEntry) {
      return res
        .status(404)
        .send(new ApiResponse(404, null, "Entry not found."));
    }

    res
      .status(200)
      .send(new ApiResponse(200, null, "Entry deleted successfully."));
  } catch (error) {
    console.error("Error in delete entry controller:", error);
    res
      .status(500)
      .send(new ApiResponse(500, null, "Failed to delete the entry."));
  }
};
