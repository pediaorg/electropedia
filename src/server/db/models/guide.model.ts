import { model, Schema } from "mongoose";
import { getModel } from "./helpers";

export type Guide = {
  created_at: Date;
  name: string;
  description: string;
  attachments: string[];
  products: string[];
  author_id: string;
};

const guideSchema = new Schema<Guide>({
  created_at: { type: Date, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  attachments: [{ type: String }],
  products: [{ type: String }],
  author_id: [{ type: String, required: true }],
});

export default getModel("Guide", () => model<Guide>("Guide", guideSchema));
