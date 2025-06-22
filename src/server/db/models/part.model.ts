import { model, Schema } from "mongoose";
import { getModel } from "./helpers";

export type Part = {
  name: string;
  specifications: string;
  usual_price: string;
  review: {
    title: string;
    description: string;
    rating: number;
  }[];
  rating: number;
  sources: {
    logo: string;
    name: string;
    price: string;
    url: string;
  }[];
  products: string[];
};

const partSchema = new Schema<Part>({
  name: { type: String, required: true },
  specifications: { type: String, required: true },
  usual_price: { type: String, required: true },
  review: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      rating: { type: Number, required: true },
    },
  ],
  rating: { type: Number, required: true },
  sources: [
    {
      logo: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  products: [{ type: String }],
});

export default getModel("Part", () => model<Part>("Part", partSchema));
