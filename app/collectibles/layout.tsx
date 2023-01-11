import React, { FC, ReactNode } from "react";

interface CollectiblesLayoutProps {
  children: ReactNode;
}

const CollectiblesLayout: FC<CollectiblesLayoutProps> = (props) => {
  return <>{props.children}</>;
};

export default CollectiblesLayout;
