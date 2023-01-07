import { FC } from "react";
import { default as PreviewSlider } from "./(fragments)/slider.component";

const PreviewPage: FC = () => {
  return (
    <section className={"w-full h-full flex flex-col"}>
      <PreviewSlider />
      <div className={"flex flex-row flex-1 justify-between"}>
        <div className={"left-side-description"}>Some description</div>
        <div className={"right-side-3d-card-preview"}>
          There is gonna be 3d card
        </div>
      </div>
    </section>
  );
};

export default PreviewPage;
