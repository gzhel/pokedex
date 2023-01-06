import React, { FC } from "react";

interface CollectiblesLayoutProps {
  children: React.ReactNode;
}

const CollectiblesLayout: FC<CollectiblesLayoutProps> = (props) => {
  return <>{props.children}</>;
};

export default CollectiblesLayout;
