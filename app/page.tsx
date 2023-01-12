import { default as PromoDescription } from "./(fragments)/description.component";
import { default as PromoCard } from "./(components)/card.component";
import { caller } from "@server/routers/_app";
import { CHARACTERS_AMOUNT } from "@utils/constants";

const PreviewPage: () => Promise<JSX.Element> = async () => {
  const { response: character } = await caller.getCharacter({
    id: Math.floor(Math.random() * CHARACTERS_AMOUNT),
  });

  return (
    <section className={"w-full h-full flex flex-col"}>
      <div className={"flex flex-row flex-1 justify-between"}>
        <PromoDescription />
        <PromoCard className={"w-6/12"} character={character} />
      </div>
    </section>
  );
};

export default PreviewPage;
