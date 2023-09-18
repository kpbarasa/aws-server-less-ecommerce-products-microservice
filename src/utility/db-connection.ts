import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const ConnectDB = async () => {
  const DB_URL = "mongodb+srv://kisakalive:BxPCmh1cyvKV7Se5@cluster0.8gi1prn.mongodb.net/?retryWrites=true&w=majority";
  
  try {
    await mongoose.connect(DB_URL);
  } catch (err) {
    console.log(err);
  }
};

export { ConnectDB };
