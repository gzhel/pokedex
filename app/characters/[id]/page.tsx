"use client";

import s from "./index.module.scss";
import PromoCard from "../../(components)/card.component";
import cn from "classnames";
import CharacterDetailsInfo from "./(fragments)/info.component";
import { FC } from "react";
import { trpc } from "@utils/hooks";

interface CollectiblesPaginationPageProps {
  params: {
    id: string;
  };
}

const CharacterDetailsPage: FC<CollectiblesPaginationPageProps> = (props) => {
  // I should to create hooks for every api query
  const { data: characterRaw, isLoading: isCharacterLoading } =
    trpc.getCharacter.useQuery({
      id: +props.params.id,
    });
  const { data: locationsRaw, isLoading: isLocationsLoading } =
    trpc.getLocationAreas.useQuery({
      id: +props.params.id,
    });
  const { data: habitatRaw, isLoading: isHabitatLoading } =
    trpc.getHabitat.useQuery({
      id: +props.params.id,
    });

  const isLoading =
    isCharacterLoading || isLocationsLoading || isHabitatLoading;

  const character = characterRaw?.response as CharacterParsed;
  const locations = locationsRaw?.response as CharacterLocations;
  const habitat = habitatRaw?.response as CharacterHabitat;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={cn("w-full h-full", s.layout)}>
      <PromoCard character={character} />
      <div className={cn("py-6", s.divider)}></div>
      <CharacterDetailsInfo
        character={character}
        locations={locations}
        habitat={habitat}
      />
    </section>
  );
};

export default CharacterDetailsPage;
