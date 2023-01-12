import axios from "axios";
import { z } from "zod";
import { wrapSuccess, trpc } from "../utils";

export const locationsRouter = trpc.router({
  getLocationAreas: trpc.procedure
    .input(z.object({ id: z.number() || z.string() }))
    .query(async ({ input }) => {
      const response = await axios<any>(
        `https://pokeapi.co/api/v2/pokemon/${input.id}/encounters`
      );

      const locationAreas: CharacterLocations = {
        locations: response.data.map((area: any) => area.location_area.name),
      };

      return wrapSuccess(locationAreas);
    }),
  getHabitat: trpc.procedure
    .input(z.object({ id: z.number() || z.string() }))
    .query(async ({ input }) => {
      const response = await axios<any>(
        `https://pokeapi.co/api/v2/pokemon-habitat/${input.id}`
      );

      const habitat: CharacterHabitat = {
        name: response.data.name,
      };

      return wrapSuccess(habitat);
    }),
});
