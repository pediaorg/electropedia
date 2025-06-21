import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { User } from "@/server/db/models";

export const testRouter = createTRPCRouter({
  welcome: protectedProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      return {
        message: `Hello, ${input.name}`,
        time: new Date(),
      };
    }),
  db: protectedProcedure.query(async () => {
    const user = await User.create({
      name: "Juan I. Casareski",
      email: "juani.casareski@gmail.com",
    });

    return user;
  }),
});
