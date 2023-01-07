import axios from "axios";
import { z } from "zod";
import { wrapSuccess, trpc } from "../utils";

export const pokemonRouter = trpc.router({
  getCharacters: trpc.procedure
    .input(z.object({ page: z.number() }))
    .query(async ({ input }) => {
      const offset = input.page * 20;
      const charactersResponse = await axios<Result<CharacterInfo>>(
        `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
      );
      return wrapSuccess(charactersResponse);
    }),
});
