import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Brand } from "@/server/db/models";
import { TRPCError } from "@trpc/server";

export const brandRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async () => {
    const response = await Brand.find();

    return response;
  }),
});
