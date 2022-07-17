import { useTransform } from "framer-motion";
import { useCallback, useLayoutEffect, useState } from "react";
import { CarModel } from "../context/ModelsContext";
import useWrapperScroll from "../hooks/useWrapperScroll";
import { Container } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  model: CarModel;
}

type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">;

export default function ModelOverlay({ model, children }: Props) {
  const { scrollY } = useWrapperScroll();
  const element = model.sectionRef.current;

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: element?.offsetTop,
      offsetHeight: element?.offsetHeight,
    } as SectionDimensions;
  }, []);

  const [dimensions, setDimensions] =
    useState<SectionDimensions>(getSectionDimensions);

  useLayoutEffect(() => {
    // Updates dimensions based on screen resize event
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions));
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  );

  const pointerEvents = useTransform(opacity, (value) =>
    value > 0 ? "auto" : "none"
  );

  return <Container style={{ opacity, pointerEvents }}>{children}</Container>;
}
