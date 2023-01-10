import { CHARACTERS_AMOUNT } from "@utils/constants";

export const getRandomCharactersPage = (amount: number) => {
  return Math.floor(Math.random() * Math.floor(CHARACTERS_AMOUNT / amount));
};
