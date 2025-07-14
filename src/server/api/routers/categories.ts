import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { Category } from "@/server/db/models";
import { TRPCError } from "@trpc/server";

export const categoriesRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async () => {
    const response = await Category.find();

    if (!response) {
      throw new TRPCError({
        code: "NOT_FOUND",
      });
    }

    return response;
  }),
});
