import { FC } from "react";

interface HeadProps {
  params: {
    pagination: string;
  };
}

const Head: FC<HeadProps> = () => {
  return <title>Collectibles</title>;
};

export default Head;
