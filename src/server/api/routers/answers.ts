import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { Answer } from "@/server/db/models";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const answersRouter = createTRPCRouter({
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const response = await Answer.find({ replied_id: input.id });

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
      const response = await Answer.find({ user_id: input.id });

      if (!response) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return response;
    }),
});
