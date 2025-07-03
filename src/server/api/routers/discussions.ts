import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Discussion } from "@/server/db/models";
import { TRPCError } from "@trpc/server";

export const discussionsRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({ id: z.string() })) // => type { name: string }
    .query(async ({ input }) => {
      const response = await Discussion.findById(input.id);

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
      const discussions = await Discussion.find({ user_id: input.id });

      return discussions;
    }),
  //   db: protectedProcedure.query(async () => {
  //     const user = await User.create({
  //       name: "Juan I. Casareski",
  //       email: "juani.casareski@gmail.com",
  //     });

  //     return user;
  //   }),
});
