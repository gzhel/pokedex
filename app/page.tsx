import { default as PromoDescription } from "./(fragments)/promo.component";
import { default as PromoCard } from "./(fragments)/card.component";
import { caller } from "../server/routes";
import { CHARACTERS_AMOUNT } from "@utils/constants";

const PreviewPage: () => Promise<JSX.Element> = async () => {
  const { response: character } = await caller.getCharacter({
    id: Math.floor(Math.random() * CHARACTERS_AMOUNT),
  });

  return (
    <section className={"w-full h-full flex flex-col"}>
      <div className={"flex flex-row flex-1 justify-between"}>
        <PromoDescription />
        <PromoCard character={character} />
      </div>
    </section>
  );
};

export default PreviewPage;
