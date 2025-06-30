import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
    return true;
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    return false;
  }
};