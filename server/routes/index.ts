import { initTRPC } from "@trpc/server";
import { pokemonRouter } from "./pokemon";

const trpc = initTRPC.create();
export const appRouter = trpc.mergeRouters(pokemonRouter);
export type AppRouter = typeof appRouter;
export const caller = appRouter.createCaller({});
