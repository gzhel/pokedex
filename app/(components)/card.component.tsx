"use client";

import Image from "next/image";
import cn from "classnames";
import { animated, to } from "react-spring";
import { motion } from "framer-motion";
import { Typography } from "@typography/typography";
import {
  useCardAnimation,
  useGlassAnimation,
  useCardModel,
} from "./card.hooks";
import s from "./card.module.scss";

export interface PromoCardProps {
  className?: string;
  character: CharacterParsed;
}

const PromoCard = (props: PromoCardProps) => {
  const cardAnimation = useCardAnimation();
  const glassAnimation = useGlassAnimation();
  const cardModel = useCardModel(props);

  return (
    <div className={cn(props.className, s.layout)}>
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
            {cardModel.cardName}
          </Typography>
          <div className={cn("py-4", s.cardPicture)}>
            <Image
              src={cardModel.cardArtwork}
              alt={cardModel.cardName}
              width={270}
              height={270}
            />{" "}
          </div>
          <Typography
            tag={"h2"}
            variant={"titleSmall"}
            className={cn("py-1 px-6", s.cardText)}
          >
            {cardModel.cardId}
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
