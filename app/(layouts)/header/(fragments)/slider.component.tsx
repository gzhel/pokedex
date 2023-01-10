"use client";

import cn from "classnames";
import s from "@layouts/header/(fragments)/slider.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { checkMobile } from "@utils/helpers/screen";

interface PreviewSliderProps {
  characters: CharacterParsed[];
}

const PreviewSlider = (props: PreviewSliderProps) => {
  const isMobile = checkMobile();

  const pathname = usePathname();

  const characters = isMobile
    ? props?.characters.slice(0, 2)
    : props?.characters;

  return pathname !== "/" ? null : (
    <div className={s.layout}>
      <div className={cn("px-5", s.row)}>
        {characters.map((ch) => (
          <div key={ch.name + ch.id} className={cn("my-4 mx-1", s.item)}>
            <Image
              src={ch.sprites.other["official-artwork"].front_default}
              alt={ch.name}
              width={60}
              height={60}
            />
            <div className={s.glass}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewSlider;
