import React, { FC } from "react";

interface PokemonLayoutProps {
  children: React.ReactNode;
}

// We don't use layout at the moment, so we need just to pull the props in
const PokemonLayout: FC<PokemonLayoutProps> = (props) => {
  return <section>{props.children}</section>;
};

export default PokemonLayout;
