import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Answer } from "@/server/db/models";
import { TRPCError } from "@trpc/server";

export const answersRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({ id: z.string() })) // => type { name: string }
    .query(async ({ input }) => {
      const response = await Answer.findById(input.id);

      if (!response) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return response;
    }),

  getAll: protectedProcedure.query(async () => {
    const response = await Answer.find();

    if (!response) {
      throw new TRPCError({
        code: "NOT_FOUND",
      });
    }

    return response;
  }),

  getByUserId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const answers = await Answer.find({ user_id: input.id });

      return answers;
    }),
});
