import axios from "axios";
import { z } from "zod";
import { wrapSuccess, trpc } from "../utils";

export const pokemonRouter = trpc.router({
  getCharacters: trpc.procedure
    .input(z.object({ page: z.number(), amount: z.number() }))
    .query(async ({ input }) => {
      const offset = input.page * input.amount;
      const response = await axios<Result<CharacterInfo>>(
        `https://pokeapi.co/api/v2/pokemon/?limit=${input.amount}&offset=${offset}`
      );

      const urls = response.data.results.map((ch) => ch.url);

      const charactersRaw = await Promise.all(
        urls.map(async (url) => await axios<any>(url))
      ).then((response) => response);

      const characters: CharacterParsed[] = charactersRaw.map((ch) => {
        return {
          id: ch.data.id,
          name: ch.data.name,
          sprites: ch.data.sprites,
        };
      });

      return wrapSuccess(characters);
    }),
  getCharacter: trpc.procedure
    .input(z.object({ id: z.number() || z.string() }))
    .query(async ({ input }) => {
      const response = await axios<any>(
        `https://pokeapi.co/api/v2/pokemon/${input.id}`
      );

      const character: CharacterParsed = {
        id: response.data.id,
        name: response.data.name,
        sprites: response.data.sprites,
      };

      return wrapSuccess(character);
    }),
});
