import React, { FC } from "react";

interface FunctionalityLayoutProps {
  children: React.ReactElement;
}

// A layout is UI that is shared between routes.
// NOTE: this is a custom layout (header, footer etc.) if u need it
const FunctionalityLayout: FC<FunctionalityLayoutProps> = (props) => {
  return <>{props.children}</>;
};

export default FunctionalityLayout;
