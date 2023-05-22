import React from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

import { MainContent as MainContentComponent } from "./styles";

function MainContent({ children, ...props }) {
  const fadeInAndSlide = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  
  

  return (
    <AnimatePresence>
    <motion.div
    initial={fadeInAndSlide.initial}
    animate={fadeInAndSlide.animate}
    >
      <MainContentComponent {...props}>{children}</MainContentComponent>
    </motion.div>
    </AnimatePresence>
  );
}

export default MainContent;
