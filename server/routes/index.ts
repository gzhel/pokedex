import { initTRPC } from "@trpc/server";
import { locationsRouter } from "@server/routes/locations";
import { pokemonRouter } from "@server/routes/pokemon";

const trpc = initTRPC.create();
export const appRouter = trpc.mergeRouters(pokemonRouter, locationsRouter);
export type AppRouter = typeof appRouter;
export const caller = appRouter.createCaller({});
