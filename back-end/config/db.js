import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://liladharrrrr:zSp97eZS9R1eGNTy@cluster0.gdpwv.mongodb.net/food-delivery-site-1"
  ).then(()=>{
    console.log("Connected to MongoDB");
  })
};
