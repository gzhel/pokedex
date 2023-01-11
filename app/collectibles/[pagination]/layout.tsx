import React, { FC, ReactNode } from "react";

interface CollectiblesPaginationLayoutProps {
  children: ReactNode;
}

const CollectiblesPaginationLayout: FC<CollectiblesPaginationLayoutProps> = (
  props
) => {
  return <>{props.children}</>;
};

export default CollectiblesPaginationLayout;
