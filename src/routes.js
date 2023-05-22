import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/home";
import Projects from "./containers/projects";
import About from "./containers/about"
import Contacts from "./containers/contacts";

const Myroutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={ <About />} />
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </Router>
  );
};

export default Myroutes;
