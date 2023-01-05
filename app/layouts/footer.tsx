import { FC } from "react";
import s from "./footer.module.css";
import cn from "classnames";

const Footer: FC = () => {
  return (
    <footer className={cn("w-full text-sm pb-5 pt-5", s.footer)}>
      <span>
        Developed by{" "}
        <a
          href="https://gzhel.vercel.app"
          target="_blank"
          rel="noreferrer"
          className={s.link}
        >
          Gregory Zhelyabin
        </a>{" "}
        in 2023
      </span>
    </footer>
  );
};

export default Footer;
