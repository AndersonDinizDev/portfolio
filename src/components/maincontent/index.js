import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MainContent as MainContentComponent } from "./styles";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";

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

  useEffect(() => {
    if (!conteudoCarregado) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  });

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
          <HashLoader
            color={"#c775d0"}
            loading={!conteudoCarregado}
            css={override}
            size={60}
          />
        </div>
      )}
    </AnimatePresence>
  );
}

export default MainContent;
