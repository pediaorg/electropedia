import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { Discussion } from "@/server/db/models";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const discussionsRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async () => {
    const response = await Discussion.find();

    if (!response) {
      throw new TRPCError({
        code: "NOT_FOUND",
      });
    }

    return response;
  }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const response = await Discussion.findById(input.id);

      if (!response) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return response;
    }),
  //   db: protectedProcedure.query(async () => {
  //     const user = await User.create({
  //       name: "Juan I. Casareski",
  //       email: "juani.casareski@gmail.com",
  //     });

  //     return user;
  //   }),
});
