"use client";

import { useEffect, useRef } from "react";
import { useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useHover } from "@utils/helpers/hooks";
import { PromoCardProps } from "./card.component";

export const useCardModel = (props: PromoCardProps) => {
  const character = props.character;
  const cardName = character.name[0].toUpperCase() + character.name.slice(1);
  const cardId = String(character.id).padStart(4, "0");
  const cardArtwork = character.sprites.other["official-artwork"].front_default;

  return { cardName, cardId, cardArtwork };
};

export const useCardAnimation = () => {
  const calcX = (y: number, ly: number) => {
    return -(y - ly - window.innerHeight / 2) / 20;
  };

  const calcY = (x: number, lx: number) => {
    return (x - lx - window.innerWidth / 2) / 20;
  };

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef<HTMLDivElement>(null);

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 10, tension: 280, friction: 60 },
    })
  );

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) => {
        return (
          !dragging &&
          api({
            rotateX: calcX(py, y.get()),
            rotateY: calcY(px, x.get()),
            scale: 1,
          })
        );
      },
      onHover: ({ hovering }) => {
        return !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 });
      },
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return { domTarget, x, y, scale, zoom, rotateX, rotateY, rotateZ };
};

export const useGlassAnimation = () => {
  const glassRef = useRef<HTMLDivElement>(null);
  const isGlassHovered = useHover(glassRef);

  // mouse position
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0
  );

  // handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isGlassHovered) {
        // animate mouse x and y
        animate(mouseX, e.clientX);
        animate(mouseY, e.clientY);
      }
    };
    if (typeof window === "undefined") return;
    // recalculate grid on resize
    window.addEventListener("mousemove", handleMouseMove);
    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isGlassHovered]);

  const dampen = 400;
  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    if (!glassRef.current) return 0;
    const rect = glassRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });
  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!glassRef.current) return 0;
    const rect = glassRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  const diagonalMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return newRotateX + newRotateY;
    }
  );
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(
    sheenPosition,
    [-100, 50, 200],
    [0, 0.5, 0]
  );
  const sheenGradient = useMotionTemplate`linear-gradient(55deg, transparent, rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%, transparent)`;

  return { glassRef, sheenGradient };
};
