import express from "express";
import cors from "cors";
import { connect } from "http2";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();

const port = process.env.PORT || 4000;
// middlewares
app.use(express.json());
app.use(cors());

// db config
connectDB();

// api routes
app.use("api/food", foodRouter);

// api routes

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
