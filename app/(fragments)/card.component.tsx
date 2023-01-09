import { Typography } from "@typography/typography";
import s from "./card.module.scss";
import Image from "next/image";
import cn from "classnames";

interface PromoCardProps {
  character: CharacterParsed;
}

const PromoCard = (props: PromoCardProps) => {
  const character = props.character;
  const cardName = character.name[0].toUpperCase() + character.name.slice(1);
  const cardId = String(character.id).padStart(4, "0");
  const cardArtwork = character.sprites.other["official-artwork"].front_default;

  return (
    <div className={s.layout}>
      <div className={s.cardBorder}>
        <div className={s.cardLayout}>
          <Typography
            tag={"h2"}
            variant={"titleSmall"}
            className={cn("py-1 px-6", s.cardText)}
          >
            {cardName}
          </Typography>
          <div className={cn("py-4", s.cardPicture)}>
            <Image src={cardArtwork} alt={cardName} width={270} height={270} />{" "}
          </div>
          <Typography
            tag={"h2"}
            variant={"titleSmall"}
            className={cn("py-1 px-6", s.cardText)}
          >
            {cardId}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
