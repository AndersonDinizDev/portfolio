import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MainContent as MainContentComponent } from "./styles";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

function MainContent({ children, ...props }) {
  const [conteudoCarregado, setConteudoCarregado] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setConteudoCarregado(true);
    }, 2000);
  }, []);

  const fadeInAndSlide = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <AnimatePresence>
      {conteudoCarregado ? (
        <motion.div
          initial={fadeInAndSlide.initial}
          animate={fadeInAndSlide.animate}
        >
          <MainContentComponent {...props}>{children}</MainContentComponent>
        </motion.div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <RingLoader
            color={"#c775d0"}
            loading={!conteudoCarregado}
            css={override}
            size={150}
          />
        </div>
      )}
    </AnimatePresence>
  );
}

export default MainContent;
