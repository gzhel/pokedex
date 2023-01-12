import { caller } from "@server/routers/_app";
import cn from "classnames";
import s from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { CHARACTERS_AMOUNT } from "@utils/constants";

interface CollectiblesPaginationPageProps {
  params: {
    pagination: string;
  };
  searchParams: any;
}

const CollectiblesPaginationPage: (
  props: CollectiblesPaginationPageProps
) => Promise<JSX.Element> = async (props) => {
  const currentPage = +props.params.pagination;

  const firstPage = 1;
  const lastPage = Math.floor(CHARACTERS_AMOUNT / 6);

  const { response: characters } = await caller.getCharacters({
    page: currentPage - 1,
    amount: 6,
  });

  return (
    <section className={s.collectibles}>
      <div className={cn("pt-6 pb-8", s.filters)}>Filters and search</div>
      <div className={cn("pb-8", s.collectiblesLayout)}>
        {characters?.map((ch) => (
          <Link
            href={`/characters/${ch.id}`}
            key={ch.name + ch.id}
            className={cn("p-4 mx-3 my-3", s.collectible)}
          >
            <Image
              src={ch.sprites.other["official-artwork"].front_default}
              alt={ch.name}
              width={96}
              height={96}
            />
            <ul className={cn("ml-10 pl-10", s.collectibleStats)}>
              <li>ID: {ch.id}</li>
              <li>Name: {ch.name[0].toUpperCase() + ch.name.slice(1)}</li>
              <li>Height: {ch.height}</li>
              <li>Weight: {ch.weight}</li>
            </ul>
          </Link>
        ))}
      </div>
      <nav className={s.pagination}>
        <Link
          className={cn("mx-4 p-2", s.paginationItem)}
          href={`/collectibles/${firstPage}`}
        >
          «
        </Link>
        {currentPage > 1 && (
          <Link
            className={cn("mx-4 p-2", s.paginationItem)}
            href={`/collectibles/${currentPage - 1}`}
          >
            {currentPage - 1}
          </Link>
        )}
        <Link
          className={cn("mx-4 p-2", s.paginationItem, s.paginationActive)}
          href={`/collectibles/${currentPage}`}
        >
          {currentPage}
        </Link>
        {currentPage < lastPage && (
          <Link
            className={cn("mx-4 p-2", s.paginationItem)}
            href={`/collectibles/${currentPage + 1}`}
          >
            {currentPage + 1}
          </Link>
        )}
        <Link
          className={cn("mx-4 p-2", s.paginationItem)}
          href={`/collectibles/${lastPage}`}
        >
          »
        </Link>
      </nav>
    </section>
  );
};

export default CollectiblesPaginationPage;
