import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { Discussion, Answer } from "@/server/db/models";
import { TRPCError } from "@trpc/server";
import { type Discussion as DiscussionType } from "@/server/db/models/discussion.model";
import { type Answer as AnswerType } from "@/server/db/models/answer.model";

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

  getRecentDiscussions: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      type AggregatedOutput = AnswerType & { discussion: DiscussionType };

      const discussionsByAnswer = await Answer.aggregate<AggregatedOutput>()
        /*.match({ replied_id: input.userId })*/
        .lookup({
          from: "discussions",
          localField: "replied_id",
          foreignField: "_id",
          as: "discussion",
        });

      return discussionsByAnswer;
    }),

  getByAnswerId: protectedProcedure
    .input(z.object({ replied_id: z.string() }))
    .query(async ({ input }) => {
      const discussion = await Discussion.findOne({ _id: input.replied_id });

      if (!discussion) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return discussion;
    }),

  //   db: protectedProcedure.query(async () => {
  //     const user = await User.create({
  //       name: "Juan I. Casareski",
  //       email: "juani.casareski@gmail.com",
  //     });

  //     return user;
  //   }),
});
