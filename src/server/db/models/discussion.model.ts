import { model, Schema } from "mongoose";
import { getModel } from "./helpers";

export type Discussion = {
  title: string;
  last_update: Date;
  publication_date: Date;
  description: string;
  user_id: string;
  product_id?: string;
};

const discussionSchema = new Schema<Discussion>({
  title: { type: String, required: true },
  last_update: { type: Date, required: true },
  publication_date: { type: Date, required: true },
  description: { type: String, required: true },
  product_id: { type: String },
  user_id: { type: String, required: true },
});

export default getModel("Discussion", () =>
  model<Discussion>("Discussion", discussionSchema)
);
