import React, { FC } from "react";
import s from "./main.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = (props) => {
  return <main className={s.main}>{props.children}</main>;
};

export default MainLayout;
