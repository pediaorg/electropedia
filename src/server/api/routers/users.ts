import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { User } from "@/server/db/models";

export const usersRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({ id: z.string() })) // => type { name: string }
    .query(async ({ input }) => {
      const user = await User.findById(input.id);

      return user;
    }),
});
