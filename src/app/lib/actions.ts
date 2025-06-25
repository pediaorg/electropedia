"use server";

import { api } from "@/trpc/server";

export async function getDiscussion(
  ...params: Parameters<typeof api.discussions.get>
) {
  return api.discussions.get(...params);
}
