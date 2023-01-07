import React, { FC } from "react";
import s from "./main.module.css";
import cn from "classnames";

interface MainLayoutProps {
  children: React.ReactNode;
}

const Main: FC<MainLayoutProps> = (props) => {
  return (
    <main className={cn("w-full pl-40 pr-40 pb-5 pt-5", s.main)}>
      {props.children}
    </main>
  );
};

export default Main;
