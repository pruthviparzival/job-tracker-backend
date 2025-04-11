import { Entry } from "../../models/entry.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const addEntry = async (req, res) => {
  try {
    const { company, role, status, link } = req.body;
    const { user } = req.params;

    if (!company || !role || !status || !link) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }

    const newEntry = await Entry.create({
      company,
      role,
      status,
      link,
      user,
    });

    res
      .status(201)
      .send(new ApiResponse(201, newEntry, "Entry added succesfully."));
  } catch (error) {
    console.log("Error in add entry controller", error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to create an entry."));
  }
};
