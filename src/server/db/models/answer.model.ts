import { model, Schema, Types } from "mongoose";
import { getModel } from "./helpers";

type Url = string;

export type Answer = {
  replied_id: Types.ObjectId;
  user_id: Types.ObjectId;
  date: Date;
  message: string;
  likes: number;
  dislikes: number;
  attachments: Url[];
};

const answerSchema = new Schema<Answer>({
  replied_id: { type: Schema.Types.ObjectId, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  date: { type: Date, default: Date.now() },
  message: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  attachments: [{ type: String }],
});

export default getModel("Answer", () => model<Answer>("Answer", answerSchema));
