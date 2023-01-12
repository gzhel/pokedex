"use client";

import { memo } from "react";
import s from "./info.module.scss";
import cn from "classnames";
import { Typography } from "@typography/typography";

interface CharacterDetailsInfo {
  character: CharacterParsed;
  locations: CharacterLocations;
  habitat: CharacterHabitat;
}

const CharacterDetailsInfo = memo<CharacterDetailsInfo>((props) => {
  const { character, locations, habitat } = props;

  // TODO:
  //  1) If API haven't habitat, application crashes
  //  2) Collectibles page items should have cm / kg dimensions

  return (
    <section className={cn("mx-auto", s.coverBorder)}>
      <div className={cn("px-10 py-10", s.coverLayout)}>
        <p className={s.coverItem}>
          <Typography tag={"span"} variant={"textBig"} className={"font-bold"}>
            Name:
          </Typography>
          <Typography tag={"span"} variant={"textBig"} className={"ml-2"}>
            {character.name[0].toUpperCase() + character.name.slice(1)}
          </Typography>
        </p>
        <p className={s.coverItem}>
          <Typography tag={"span"} variant={"textBig"} className={"font-bold"}>
            ID:
          </Typography>
          <Typography tag={"span"} variant={"textBig"} className={"ml-2"}>
            {character.id}
          </Typography>
        </p>
        <p className={s.coverItem}>
          <Typography tag={"span"} variant={"textBig"} className={"font-bold"}>
            Height:
          </Typography>
          <Typography tag={"span"} variant={"textBig"} className={"ml-2"}>
            {character.height && character.height * 10} cm
          </Typography>
        </p>
        <p className={s.coverItem}>
          <Typography tag={"span"} variant={"textBig"} className={"font-bold"}>
            Weight:
          </Typography>
          <Typography tag={"span"} variant={"textBig"} className={"ml-2"}>
            {character.weight && character.weight / 10} kg
          </Typography>
        </p>
        <p className={s.coverItem}>
          <Typography tag={"span"} variant={"textBig"} className={"font-bold"}>
            Habitat:
          </Typography>
          <Typography tag={"span"} variant={"textBig"} className={"ml-2"}>
            {habitat.name}
          </Typography>
        </p>
        {!locations.locations.length ? null : (
          <p className={s.coverItem}>
            <Typography
              tag={"span"}
              variant={"textBig"}
              className={"font-bold"}
            >
              Locations:
            </Typography>
            <Typography tag={"span"} variant={"textBig"} className={"ml-2"}>
              {locations.locations.map((location, idx, arr) => (
                <span key={location}>
                  {location[0].toUpperCase() +
                    location.slice(1).split("-").join(" ")}
                  {arr[idx + 1] ? ", " : ""}
                </span>
              ))}
            </Typography>
          </p>
        )}
      </div>
    </section>
  );
});

export default CharacterDetailsInfo;
