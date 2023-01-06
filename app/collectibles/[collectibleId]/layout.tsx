import React, { FC } from "react";

interface CollectiblesLayoutProps {
  children: React.ReactNode;
}

const CollectibleIdLayout: FC<CollectiblesLayoutProps> = (props) => {
  return <>{props.children}</>;
};

export default CollectibleIdLayout;
