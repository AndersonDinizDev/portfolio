import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import GlobalStyle from "./styles/globalStyle";

import ParticlesComponent from "./components/particlecontainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Routes />
    <ParticlesComponent id="particles" /> <GlobalStyle />
  </>
);
