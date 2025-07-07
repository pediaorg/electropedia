import { model, Schema, Types } from "mongoose";
import { getModel } from "./helpers";

type Url = string;

export type Answer = {
  replied_id: Types.ObjectId;
  user_id: Types.ObjectId;
  message: string;
  attachments: Url[];
};

const answerSchema = new Schema<Answer>({
  replied_id: { type: Schema.Types.ObjectId, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  message: { type: String, required: true },
  attachments: [{ type: String }],
});

export default getModel("Answer", () => model<Answer>("Answer", answerSchema));
