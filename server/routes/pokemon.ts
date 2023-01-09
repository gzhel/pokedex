import axios from "axios";
import { z } from "zod";
import { wrapSuccess, trpc } from "../utils";

export const pokemonRouter = trpc.router({
  getCharacters: trpc.procedure
    .input(z.object({ page: z.number(), amount: z.number() }))
    .query(async ({ input }) => {
      const offset = input.page * input.amount;
      const charactersResponse = await axios<Result<CharacterInfo>>(
        `https://pokeapi.co/api/v2/pokemon/?limit=${input.amount}&offset=${offset}`
      );

      const charactersUrls = charactersResponse.data.results.map(
        (ch) => ch.url
      );

      const detailedCharactersResponse = await Promise.all(
        charactersUrls.map(async (url) => await axios<any>(url))
      ).then((response) => response);

      const filteredCharactersResponse = detailedCharactersResponse.map(
        (ch) => {
          return {
            id: ch.data.id,
            name: ch.data.name,
            sprites: ch.data.sprites,
          };
        }
      );

      return wrapSuccess(filteredCharactersResponse);
    }),
  getCharacter: trpc.procedure
    .input(z.object({ id: z.number() || z.string() }))
    .query(async ({ input }) => {
      const characterResponse = await axios<any>(
        `https://pokeapi.co/api/v2/pokemon/${input.id}`
      );

      return wrapSuccess({
        id: characterResponse.data.id,
        name: characterResponse.data.name,
        sprites: characterResponse.data.sprites,
      });
    }),
});
