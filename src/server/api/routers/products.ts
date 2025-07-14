import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Product } from "@/server/db/models";
import { TRPCError } from "@trpc/server";

export const productsRouter = createTRPCRouter({
  getByDiscussion: protectedProcedure
    .input(z.object({ id: z.string() })) // => type { name: string }
    .query(async ({ input }) => {
      const product = await Product.findOne({ _id: input.id });

      // if (!product) {
      //   throw new TRPCError({
      //     code: "NOT_FOUND",
      //   });
      // }

      return product;
    }),
});
