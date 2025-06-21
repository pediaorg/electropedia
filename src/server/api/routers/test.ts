import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const testRouter = createTRPCRouter({
  test: protectedProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      return {
        message: `Hello, ${input.name}`,
        time: new Date(),
      };
    }),
});
