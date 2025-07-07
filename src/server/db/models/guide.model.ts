import { model, Schema, Types } from "mongoose";
import { getModel } from "./helpers";

type Url = string;

export type Guide = {
  created_at: Date;
  name: string;
  description: string;
  attachments: Url[];
  products: Types.ObjectId[];
  author_id: Types.ObjectId;
};

const guideSchema = new Schema<Guide>({
  created_at: { type: Date, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  attachments: [{ type: String }],
  products: [{ type: Schema.Types.ObjectId }],
  author_id: { type: Schema.Types.ObjectId },
});

export default getModel("Guide", () => model<Guide>("Guide", guideSchema));
