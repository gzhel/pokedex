import { initTRPC } from "@trpc/server";
import { locationsRouter } from "@server/routers/locations";
import { pokemonRouter } from "@server/routers/pokemon";

const trpc = initTRPC.create();
export const appRouter = trpc.mergeRouters(pokemonRouter, locationsRouter);
export const caller = appRouter.createCaller({});
export type AppRouter = typeof appRouter;
