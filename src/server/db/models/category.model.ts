import { model, Schema } from "mongoose";
import { getModel } from "./helpers";

type Url = string;

export type Category = {
  name: string;
  icon: string;
  url: Url;
};

const categorySchema = new Schema<Category>({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  url: { type: String, required: true },
});

export default getModel("Category", () =>
  model<Category>("Category", categorySchema)
);
