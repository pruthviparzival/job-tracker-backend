import mongoose from "mongoose";

const entrySchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Applied", "Interview", "Offer", "Rejected"],
    },
    link: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: new Date(Date.now()),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Entry = mongoose.model("Entry", entrySchema);
