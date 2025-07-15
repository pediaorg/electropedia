import { model, Schema, Types } from "mongoose";
import { getModel } from "./helpers";

export type Discussion = {
  title: string;
  last_update: Date;
  publication_date: Date;
  description: string;
  user_id: Types.ObjectId;
  product_id?: Types.ObjectId;
};

const discussionSchema = new Schema<Discussion>({
  title: { type: String, required: true },
  last_update: { type: Date, required: true },
  publication_date: { type: Date, required: true, default: Date.now() },
  description: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  product_id: { type: Schema.Types.ObjectId },
});

export default getModel("Discussion", () =>
  model<Discussion>("Discussion", discussionSchema)
);
