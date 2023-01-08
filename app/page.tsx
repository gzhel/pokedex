import { default as PromoDescription } from "./(fragments)/promo.component";
import { default as PromoCard } from "./(fragments)/card.component";
import { caller } from "../server/routes";

const PreviewPage: () => Promise<JSX.Element> = async () => {
  const character = await caller
    .getCharacters({
      page: Math.floor(Math.random() * 1000),
      amount: 1,
    })
    .then((characters) => characters.response[0]);

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
