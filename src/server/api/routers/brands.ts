import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Brand } from "@/server/db/models";
import { TRPCError } from "@trpc/server";

export const brandRouter = createTRPCRouter({
  getByCategoryId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const response = await Brand.find({ category_id: input.id });

      return response;
    }),
});
