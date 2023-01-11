import { caller } from "@server/routes";
import s from "./index.module.scss";
import PromoCard from "../../(components)/card.component";
import cn from "classnames";

interface CollectiblesPaginationPageProps {
  params: {
    id: string;
  };
}

const CharacterDetailsPage: (
  props: CollectiblesPaginationPageProps
) => Promise<JSX.Element> = async (props) => {
  const { response: character } = await caller.getCharacter({
    id: +props.params.id,
  });

  return (
    <section className={cn("w-full h-full", s.layout)}>
      <PromoCard character={character} />
      <div className={cn("py-6", s.divider)}></div>
      <div className={s.description}>
        <p>Name: {character.name}</p>
        <p>ID: {character.id}</p>
        <p>Height: {character.height}</p>
        <p>Weight: {character.weight}</p>
      </div>
    </section>
  );
};

export default CharacterDetailsPage;
