import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { User, Guide } from "@/server/db/models";

export const guidesRouter = createTRPCRouter({
  getByUserId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const guides = await Guide.find({ user_id: input.id });

      return guides;
    }),

  //   db: protectedProcedure.query(async () => {
  //     const user = await User.create({
  //       name: "Juan I. Casareski",
  //       email: "juani.casareski@gmail.com",
  //     });

  //     return user;
  //   }),
});
