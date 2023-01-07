"use client";

import s from "./slider.module.scss";
import { usePathname } from "next/navigation";

const PreviewSlider = () => {
  const pathname = usePathname();

  const randomHSL = () => `hsla(${~~(360 * Math.random())},70%,70%,0.8)`;

  const elementsRow = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  console.log(pathname === "/");

  return pathname !== "/" ? null : (
    <div className={s.layout}>
      <div className={s.row}>
        {elementsRow.map((el) => (
          <div
            key={"random-item" + el}
            className={s.item}
            style={{ backgroundColor: randomHSL() }}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewSlider;
