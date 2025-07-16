import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Product } from "@/server/db/models";
import { TRPCError } from "@trpc/server";

export const productsRouter = createTRPCRouter({
  getByDiscussion: protectedProcedure
    .input(z.object({ id: z.string() })) // => type { name: string }
    .query(async ({ input }) => {
      const product = await Product.findOne({ _id: input.id });

      if (!product) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return product;
    }),
  getByBrandName: protectedProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const product = await Product.findOne({
        name: decodeURIComponent(input.name),
      });

      if (!product) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return product;
    }),
  get: protectedProcedure
    .input(z.object({ id: z.string() })) // => type { name: string }
    .query(async ({ input }) => {
      const product = await Product.findById(input.id);

      if (!product) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return product;
    }),
  getAllByProduct: protectedProcedure
    .input(z.object({ name: z.string(), category: z.string() }))
    .query(async ({ input }) => {
      const product = await Product.find({
        brand: decodeURIComponent(input.name),
        category: decodeURIComponent(input.category),
      });

      return product;
    }),
  getAll: protectedProcedure.query(async () => {
    const products = await Product.find();

    return products.map((p) => ({ id: p.id, name: p.name, image: p.image }));
  }),
});
