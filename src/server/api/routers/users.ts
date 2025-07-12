import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { User } from "@/server/db/models";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const usersRouter = createTRPCRouter({
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const response = await User.find({ id: input.id });

      if (!response) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return response;
    }),
});
