import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function testConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB!");

    // List all collections (optional)
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log("Collections in database:");
    collections.forEach((collection) => console.log(`- ${collection.name}`));

    // Close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

testConnection();
