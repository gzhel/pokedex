import { FC } from "react";
import s from "./footer.module.css";
import cn from "classnames";

const Footer: FC = () => {
  return (
    <footer className={cn("w-full pl-40 pr-40 pb-5 pt-5", s.footer)}>
      <span className={"text-sm"}>
        Developed by{" "}
        <a
          href="https://gzhel.vercel.app"
          target="_blank"
          rel="noreferrer"
          className={s.link}
        >
          <span className={s.bigDaddy}>Gregory Zhelyabin</span>
        </a>{" "}
        in 2023
      </span>
    </footer>
  );
};

export default Footer;
