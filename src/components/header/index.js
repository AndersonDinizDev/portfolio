import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";

import { Header as HeaderComponent } from "./styles";
import { LogoText } from "./styles";
import LinksP from "../../components/linksp";
import MediaButton from "../../components/mediabutton";

function Header({ children, ...props }) {
  const [bar, setBar] = useState(false);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToProjects = () => {
    navigate("/projects");
  };

  const goToAbout = () => {
    navigate("/about");
  };

  const goToContacts = () => {
    navigate("/contacts");
  };

  return (
    <HeaderComponent {...props} bar={bar}>
      <LogoText>
        <img src={Logo} alt="logo-img" />
        ANDERSON DINIZ
      </LogoText>
      <nav>
        <ul bar={bar}>
          <li>
            <LinksP onClick={goToHome}>
              <span>#</span>home
            </LinksP>
          </li>
          <li>
            <LinksP onClick={goToProjects}>
              <span>#</span>projects
            </LinksP>
          </li>
          <li>
            <LinksP onClick={goToAbout}>
              <span>#</span>about-me
            </LinksP>
          </li>
          <li>
            <LinksP onClick={goToContacts}>
              <span>#</span>contacts
            </LinksP>
          </li>
          <li className="ismediabuttons">
            <MediaButton href="https://www.linkedin.com/in/andersonldiniz/">
              <img src={Linkedin} alt="linkedin-icon" />
            </MediaButton>
            <MediaButton href="https://github.com/andersondinizdev">
              <img src={GitHub} alt="github-icon" />
            </MediaButton>
            <MediaButton href="https://t.me/andersondiniz159">
              <img src={Telegram} alt="telegram-icon" />
            </MediaButton>
          </li>
        </ul>
      </nav>
      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
    </HeaderComponent>
  );
}

export default Header;
