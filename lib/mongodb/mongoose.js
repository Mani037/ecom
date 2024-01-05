import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (!isConnected) {
    console.log("already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);

    isConnected = true;

    console.log("connection db success");
  } catch (error) {
    console.log(error);
  }
};
