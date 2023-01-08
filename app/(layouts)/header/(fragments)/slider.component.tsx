"use client";

import s from "./slider.module.scss";
import { usePathname } from "next/navigation";
import cn from "classnames";

const PreviewSlider = () => {
  const pathname = usePathname();

  const elementsRow = [1, 2, 3, 4, 5, 6, 7, 8];

  return pathname !== "/" ? null : (
    <div className={s.layout}>
      <div className={cn("px-5", s.row)}>
        {elementsRow.map((el) => (
          <div key={"random-item" + el} className={cn("my-4 mx-1", s.item)}>
            {el}
            <div className={s.glass}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewSlider;
