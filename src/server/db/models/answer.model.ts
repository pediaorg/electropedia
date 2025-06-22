import { model, Schema } from "mongoose";
import { getModel } from "./helpers";

export type Answer = {
  replied_id: string;
  user_id: string;
  message: string;
  attachments: string[];
};

const answerSchema = new Schema<Answer>({
  replied_id: { type: String, required: true },
  user_id: { type: String, required: true },
  message: { type: String, required: true },
  attachments: [{ type: String }],
});

export default getModel("Answer", () => model<Answer>("Answer", answerSchema));
