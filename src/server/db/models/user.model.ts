import mongoose, { model, Schema } from "mongoose";

type IUser = {
  name: string;
  email: string;
  avatar?: string;
};

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

const userModel = () => {
  return mongoose.models && mongoose.models.User
    ? mongoose.models.User
    : model<IUser>("User", userSchema);
};

export default userModel;
