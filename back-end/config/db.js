import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://liladharrrrr:sBBr3vhKETcHPTVD@cluster0.gdpwv.mongodb.net/food-delivery-site-1"
    );
    console.log("Database Connected");
    return true;
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    return false;
  }
};