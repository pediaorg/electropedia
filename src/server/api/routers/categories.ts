import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Category } from "@/server/db/models";

export const categoriesRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async () => {
    const response = await Category.find();

    return response;
  }),
});
