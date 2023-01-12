import { caller } from "@server/routes";
import s from "./index.module.scss";
import PromoCard from "../../(components)/card.component";
import cn from "classnames";
import CharacterDetailsInfo from "./(fragments)/info.component";

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
  const { response: locations } = await caller.getLocationAreas({
    id: +props.params.id,
  });
  const { response: habitat } = await caller.getHabitat({
    id: +props.params.id,
  });

  return (
    <section className={cn("w-full h-full", s.layout)}>
      <PromoCard character={character} />
      <div className={cn("py-6", s.divider)}></div>
      <CharacterDetailsInfo
        character={character}
        locations={locations}
        habitat={habitat}
      />
    </section>
  );
};

export default CharacterDetailsPage;
