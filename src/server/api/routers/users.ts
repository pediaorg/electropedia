import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { User } from "@/server/db/models";
import { TRPCError } from "@trpc/server";

export const usersRouter = createTRPCRouter({
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const user = await User.findById({ _id: input.id });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return user;
    }),

});
