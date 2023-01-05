import React, { FC } from "react";

interface HeadProps {
  children: React.ReactNode;
}

const Head: FC<HeadProps> = (props) => {
  return (
    <>
      {props.children}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Head;
