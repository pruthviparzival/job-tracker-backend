import { Entry } from "../../models/entry.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const updateEntryStatus = async (req, res) => {
  try {
    const { entryId } = req.params;
    const { status } = req.body;

    if (!entryId) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Entry ID is required."));
    }

    if (!status) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "New status is required."));
    }

    const updatedEntry = await Entry.findByIdAndUpdate(
      entryId,
      {
        $set: {
          status: status,
        },
      },
      { new: true } // Return the modified document
    );

    if (!updatedEntry) {
      return res
        .status(404)
        .send(new ApiResponse(404, null, "Entry not found."));
    }

    res
      .status(200)
      .send(
        new ApiResponse(200, updatedEntry, "Entry status updated successfully.")
      );
  } catch (error) {
    console.error("Error in update entry status controller:", error);
    res
      .status(500)
      .send(new ApiResponse(500, null, "Failed to update entry status."));
  }
};

export default updateEntryStatus;
