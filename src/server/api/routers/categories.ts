import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Category } from "@/server/db/models";
import { TRPCError } from "@trpc/server";

export const categoriesRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async () => {
    const response = await Category.find();

    return response;
  }),
  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const response = await Category.findById({ _id: input.id });

      return response;
    }),
});
