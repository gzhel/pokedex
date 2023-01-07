import { FC } from "react";
import { default as PromoDescription } from "./(fragments)/promo.component";
import { default as PromoCard } from "./(fragments)/card.component";

const PreviewPage: FC = () => {
  return (
    <section className={"w-full h-full flex flex-col"}>
      <div className={"flex flex-row flex-1 justify-between"}>
        <PromoDescription />
        <PromoCard />
      </div>
    </section>
  );
};

export default PreviewPage;
