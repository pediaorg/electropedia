import { model, Schema } from "mongoose";
import { getModel } from "./helpers";

export type Product = {
  name: string;
  model: string;
  brand: string;
  n_comments: number;
  specifications: string;
  description: string;
  guides: string[];
  videos: string[];
  faq: { question: string; answer: string }[];
  image: string;
  images: string[];
  category_id: string;
  brand_id: string;
};

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  model: { type: String, required: true },
  brand: { type: String, required: true },
  n_comments: { type: Number, required: true },
  specifications: { type: String, required: true },
  description: { type: String, required: true },
  guides: [{ type: String }],
  videos: [{ type: String }],
  faq: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
  image: { type: String, required: true },
  images: [{ type: String, required: true }],
  category_id: { type: String, required: true },
  brand_id: { type: String, required: true },
});

export default getModel("Product", () =>
  model<Product>("Product", productSchema)
);
