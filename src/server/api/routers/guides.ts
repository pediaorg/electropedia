import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Guide } from "@/server/db/models";

export const guidesRouter = createTRPCRouter({
  getByUserId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const guides = await Guide.find({ author_id: input.id });

      return guides;
    }),

  countGuidesFromUser: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const cantGuides = await Guide.countDocuments({ author_id: input.id });
      return cantGuides;
    }),

  //   db: protectedProcedure.query(async () => {
  //     const user = await User.create({
  //       name: "Juan I. Casareski",
  //       email: "juani.casareski@gmail.com",
  //     });

  //     return user;
  //   }),
});
