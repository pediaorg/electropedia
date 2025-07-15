import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Guide } from "@/server/db/models";

export const guidesRouter = createTRPCRouter({
  getByProductId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const guides = await Guide.find({
        products: input.id,
      });

      return guides;
    }),
});