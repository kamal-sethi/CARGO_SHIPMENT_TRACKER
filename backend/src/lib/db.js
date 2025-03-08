import mongoose from "mongoose";
export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb is connected");
  } catch (error) {
    console.log("error in connecting to database", error);
    process.exit(1);
  }
};
