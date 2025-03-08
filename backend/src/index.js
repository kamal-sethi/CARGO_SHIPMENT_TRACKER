import express from "express";
import { connectToDb } from "./lib/db.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

const PORT = 5000;
app.use(cors());
app.use(express.json());
dotenv.config();
connectToDb();

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
