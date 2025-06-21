import mongoose, { type Model } from "mongoose";

export function getModel<T extends Model<any>>(name: string, model: () => T) {
  return (mongoose.models[name] as T) || model();
}
