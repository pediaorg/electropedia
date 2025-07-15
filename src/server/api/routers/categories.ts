import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Category } from "@/server/db/models";

export const categoriesRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async () => {
    const response = await Category.find();

    return response;
  }),
  get: protectedProcedure
    .input(z.object({ value: z.string() }))
    .query(async ({ input }) => {
      const response = await Category.findOne({ value: input.value });

      return response;
    }),
});
