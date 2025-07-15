"use server";

import { api } from "@/trpc/server";

export async function createAnswer(
  ...params: Parameters<typeof api.answers.create>
) {
  return api.answers.create(...params);
}
