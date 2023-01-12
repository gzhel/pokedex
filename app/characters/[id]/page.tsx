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
  const { data: character, isLoading: isCharacterLoading } =
    trpc.getCharacter.useQuery({
      id: +props.params.id,
    });
  const { data: locations, isLoading: isLocationsLoading } =
    trpc.getLocationAreas.useQuery({
      id: +props.params.id,
    });
  const { data: habitat, isLoading: isHabitatLoading } =
    trpc.getHabitat.useQuery({
      id: +props.params.id,
    });

  const isLoading =
    isCharacterLoading || isLocationsLoading || isHabitatLoading;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={cn("w-full h-full", s.layout)}>
      {character?.response.name}
      {locations?.response.locations}
      {habitat?.response.name}
      {/*<PromoCard character={character} />*/}
      {/*<div className={cn("py-6", s.divider)}></div>*/}
      {/*<CharacterDetailsInfo*/}
      {/*  character={character}*/}
      {/*  locations={locations}*/}
      {/*  habitat={habitat}*/}
      {/*/>*/}
    </section>
  );
};

export default CharacterDetailsPage;
