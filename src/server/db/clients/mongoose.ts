import mongoose from "mongoose";

const mongooseClient = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  await mongoose.connect(uri);
};

mongooseClient().catch((err) => console.log(err));

export default mongooseClient;
