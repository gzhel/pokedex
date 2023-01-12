"use client";

import { memo } from "react";
import s from "./info.module.scss";
import cn from "classnames";

interface CharacterDetailsInfo {
  character: CharacterParsed;
  locations: CharacterLocations;
  habitat: CharacterHabitat;
}

const CharacterDetailsInfo = memo<CharacterDetailsInfo>((props) => {
  const { character, locations, habitat } = props;

  return (
    <section className={cn("mx-auto", s.coverBorder)}>
      <div className={cn("px-10 py-10", s.coverLayout)}>
        <p>Name: {character.name}</p>
        <p>ID: {character.id}</p>
        <p>Height: {character.height}</p>
        <p>Weight: {character.weight}</p>
        <p>Habitat: {habitat.name}</p>
        <p>
          Location:{" "}
          {locations.locations.map((location) => (
            <span key={location}>{location.split("-").join(" ")}, </span>
          ))}
        </p>
      </div>
    </section>
  );
});

export default CharacterDetailsInfo;
