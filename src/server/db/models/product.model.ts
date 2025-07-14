import { model, Schema, Types } from "mongoose";
import { getModel } from "./helpers";

type Url = string;

export type Product = {
  name: string;
  model: string;
  brand: string;
  n_comments: number;
  specifications: string;
  description: string;
  faq: { question: string; answer: string }[];
  videos: Url[];
  image: Url;
  images: Url[];

  guides: Types.ObjectId[];
  category_id: Types.ObjectId;
  brand_id: Types.ObjectId;
};

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  model: { type: String, required: true },
  brand: { type: String, required: true },
  n_comments: { type: Number, required: true },
  specifications: { type: String, required: true },
  description: { type: String, required: true },
  faq: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
  videos: [{ type: String }],
  image: { type: String, required: true },
  images: [{ type: String, required: true }],

  guides: [{ type: Schema.Types.ObjectId }],
  category_id: { type: Schema.Types.ObjectId, required: true },
  brand_id: { type: Schema.Types.ObjectId, required: true },
});

export default getModel("Product", () =>
  model<Product>("Product", productSchema)
);
