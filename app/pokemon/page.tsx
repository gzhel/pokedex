import { FC } from "react";

// This page will be rendered at /folder_name route with layouts (header etc.)
// of root layout component, so in here we just create our custom page
const PokemonPage: FC = () => {
  return (
    <section>
      <h1>Pokemon page</h1>
    </section>
  );
};

export default PokemonPage;
