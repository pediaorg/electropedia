import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

import { testRouter } from "./routers/test";
import { discussionsRouter } from "./routers/discussions";
import { categoriesRouter } from "./routers/categories";
import { guidesRouter } from "./routers/guides";
import { productsRouter } from "./routers/products";
import { usersRouter } from "./routers/users";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  test: testRouter,
  discussions: discussionsRouter,
  categories: categoriesRouter,
  guides: guidesRouter,
  products: productsRouter,
  users: usersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
