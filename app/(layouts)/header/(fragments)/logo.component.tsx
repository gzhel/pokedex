"use client";

import { FC, useCallback } from "react";
import cn from "classnames";
import s from "@layouts/header/header.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo: FC = () => {
  const router = useRouter();

  const handleLogoClick = useCallback(() => {
    router.push("/");
  }, []);

  return (
    <div className={cn("text-base", s.logo)} onClick={handleLogoClick}>
      <Image src={"/logo.svg"} alt={"Pokedex logo"} width={48} height={48} />
      <span className={"ml-2.5"}>Pokedex</span>
    </div>
  );
};

export default Logo;
