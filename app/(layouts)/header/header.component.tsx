import cn from "classnames";
import s from "./header.module.css";
import Link from "next/link";
import { ROUTES } from "@utils/constants";
import { default as Logo } from "@layouts/header/(fragments)/logo.component";
import { default as PreviewSlider } from "@layouts/header/(fragments)/slider.component";
import { caller } from "../../../server/routes";
import { getRandomCharactersPage } from "@utils/helpers";

const Header: () => Promise<JSX.Element> = async () => {
  const { response: characters } = await caller.getCharacters({
    page: getRandomCharactersPage(8),
    amount: 8,
  });

  return (
    <>
      <header className={cn("w-full pl-40 pr-40 pt-2.5 pb-2.5", s.header)}>
        <Logo />
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
      <PreviewSlider characters={characters} />
    </>
  );
};

export default Header;
