import { model, Schema, Types } from "mongoose";
import { getModel } from "./helpers";

export type Brand = {
  category_id: Types.ObjectId;
  name: string;
  icon: string;
};

const brandSchema = new Schema<Brand>({
  category_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
});

export default getModel("Brand", () => model<Brand>("Brand", brandSchema));
