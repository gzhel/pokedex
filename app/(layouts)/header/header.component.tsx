import { FC } from "react";
import Image from "next/image";
import cn from "classnames";
import s from "./header.module.css";
import Link from "next/link";
import { ROUTES } from "@utils/constants";

const Header: FC = () => {
  return (
    <header className={cn("w-full pl-40 pr-40 pt-5 pb-5", s.header)}>
      <div className={cn("text-base", s.logo)}>
        <Image src={"/logo.svg"} alt={"Pokedex logo"} width={32} height={32} />
        <span className={"ml-2.5"}>Pokedex</span>
      </div>
      <nav>
        <ul className={cn("text-base", s.navigation)}>
          <li className={cn("mr-5 ml-5", s.navItem)}>
            <Link href={ROUTES.COLLECTIBLES}>Collectibles</Link>
          </li>
          <li className={cn("mr-5 ml-5", s.navItem)}>
            <Link href={ROUTES.MAIN}>Main</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
