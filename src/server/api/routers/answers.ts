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

  create: protectedProcedure
    .input(
      z.object({
        replied_id: z.string(),
        user_id: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const newAnswer = new Answer({
        replied_id: input.replied_id,
        user_id: input.user_id,
        message: input.message,
      });

      const response = await newAnswer.save();

      if (!response) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create answer",
        });
      }

      return response;
    }),
});
