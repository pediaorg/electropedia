import { model, Schema } from "mongoose";
import { getModel } from "./helpers";

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

export default getModel("User", () => model<User>("User", userSchema));
