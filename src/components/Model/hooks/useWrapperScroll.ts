import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from "../context/ModelsContext";

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrapperRef.current;

    if (element) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = element;

        // Total scroll size that the user has available on screen
        const fullScroll = scrollHeight - offsetHeight;

        scrollY.set(scrollTop); // px
        scrollYProgress.set(scrollTop / fullScroll); // 0 - 1 (%)
      };

      element.addEventListener("scroll", updateScrollValue);

      return () => element.removeEventListener("scroll", updateScrollValue);
    }
  }, []);

  return { scrollY, scrollYProgress };
}
