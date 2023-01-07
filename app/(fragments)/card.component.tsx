import { Typography } from "@typography/typography";
import s from "./card.module.scss";
import Image from "next/image";
import cn from "classnames";

const PromoCard = () => {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  return (
    <div className={s.layout}>
      <div className={s.cardBorder}>
        <div className={s.cardLayout}>
          <Typography
            tag={"h2"}
            variant={"titleBig"}
            className={cn("p-2", s.cardTitle)}
          >
            Pikachu / 0025
          </Typography>
          <div className={s.cardPicture}>
            <Image
              src={url + 25 + ".png"}
              alt={"Pikachu"}
              width={200}
              height={200}
            />{" "}
          </div>
          <Typography
            tag={"p"}
            variant={"textSmall"}
            className={cn("pt-2 pr-2 pb-4 pl-2", s.cardDescription)}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            blanditiis cum dolore dolorem dolores est eveniet facilis
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
