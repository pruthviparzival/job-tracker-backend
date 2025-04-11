import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Attempting to connect to Database...");
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to Database...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
