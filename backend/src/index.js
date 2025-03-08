import express from "express";
import { connectToDb } from "./lib/db.js";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'
import cors from "cors";
import authRoute from './routes/authRoute.js'
const app = express();

const PORT = 5000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

connectToDb();


app.use('/api/v1/auth',authRoute)
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
