"use client";

import { Typography } from "@typography/typography";
import s from "./card.module.scss";
import Image from "next/image";
import cn from "classnames";
import { animated, to } from "react-spring";
import { useCardAnimation, useGlassAnimation } from "./card.hooks";
import { motion } from "framer-motion";

interface PromoCardProps {
  character: CharacterParsed;
}

const PromoCard = (props: PromoCardProps) => {
  const cardAnimation = useCardAnimation();
  const glassAnimation = useGlassAnimation();

  const character = props.character;
  const cardName = character.name[0].toUpperCase() + character.name.slice(1);
  const cardId = String(character.id).padStart(4, "0");
  const cardArtwork = character.sprites.other["official-artwork"].front_default;

  return (
    <div className={s.layout}>
      <animated.div
        ref={cardAnimation.domTarget}
        style={{
          transform: "perspective(600px)",
          x: cardAnimation.x,
          y: cardAnimation.y,
          scale: to([cardAnimation.scale, cardAnimation.zoom], (s, z) => s + z),
          rotateX: cardAnimation.rotateX,
          rotateY: cardAnimation.rotateY,
          rotateZ: cardAnimation.rotateZ,
        }}
        className={s.cardBorder}
      >
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
        <motion.div
          ref={glassAnimation.glassRef}
          style={{ backgroundImage: glassAnimation.sheenGradient }}
          className={s.glass}
        ></motion.div>
      </animated.div>
    </div>
  );
};

export default PromoCard;
