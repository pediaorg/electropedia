"use server";

import { api } from "@/trpc/server";

export async function createAnswer(
  ...params: Parameters<typeof api.answers.create>
) {
  return api.answers.create(...params);
}

export async function createDiscussion(
  ...params: Parameters<typeof api.discussions.create>
) {
  return api.discussions.create(...params);
}

export async function getProducts(
  ...params: Parameters<typeof api.products.getAll>
) {
  return api.products.getAll(...params);
}
