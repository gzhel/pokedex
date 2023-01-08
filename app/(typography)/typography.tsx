import React, { FC } from "react";
import cn from "classnames";
import s from "./typography.module.scss";

type Tag = "h1" | "h2" | "span" | "p" | "label";
type Variant =
  | "promoBig"
  | "promoSmall"
  | "titleBig"
  | "titleSmall"
  | "textBig"
  | "textSmall";

interface TypographyProps {
  children: string | React.ReactNode;
  tag: Tag;
  variant: Variant;
  className?: string;
}

export const Typography: FC<TypographyProps> = (props) => {
  const tailwindVariants = {
    promoBig: "text-4xl",
    promoSmall: "text-3xl",
    titleBig: "text-xl",
    titleSmall: "text-lg",
    textBig: "text-base",
    textSmall: "text-sm",
  };

  const Component = props.tag || "div";

  return (
    <Component
      className={cn(
        s.typography,
        props.className,
        tailwindVariants[props.variant]
      )}
    >
      {props.children}
    </Component>
  );
};
