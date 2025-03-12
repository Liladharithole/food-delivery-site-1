import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();

// port
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB config
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Connected");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
