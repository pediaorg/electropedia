import mongoose, { model, Schema, type Model } from "mongoose";

type User = {
  name: string;
  email: string;
  avatar?: string;
};

const userSchema = new Schema<User>({
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

function getModel<T extends Model<any>>(name: string, model: () => T) {
  return (mongoose.models[name] as T) || model();
}

export default getModel("User", () => model<User>("User", userSchema));
