import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { i18n } from "../../translate/i18n";

import Logo from "../../assets/logo.svg";
import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";
import FlagBr from "../../assets/br.svg";
import FlagUs from "../../assets/us.svg";

import { Header as HeaderComponent } from "./styles";
import { LogoText, Flag } from "./styles";
import LinksP from "../../components/linksp";
import MediaButton from "../../components/mediabutton";

const I18N_STORAGE_KEY = 'i18nextLng';

function Header({ children, ...props }) {
  const [bar, setBar] = useState(false);
  const [language, languageSet] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const [flag, setFlag] = useState(FlagBr);
  const navigate = useNavigate();

  useEffect(() => {
    if (language === 'pt-BR') {
      setFlag(FlagUs);
    } else {
      setFlag(FlagBr);
    }
  }, [language]);

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

  const handleSelectChange = () => {
    const newLanguageSet = language === "pt-BR" ? "en-US" : "pt-BR";
    localStorage.setItem(I18N_STORAGE_KEY, newLanguageSet);
    languageSet(newLanguageSet);
    window.location.reload();
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
              <span>#</span>{i18n.t('header.text1')}
            </LinksP>
          </li>
          <li>
            <LinksP onClick={goToProjects}>
              <span>#</span>{i18n.t('header.text2')}
            </LinksP>
          </li>
          <li>
            <LinksP onClick={goToAbout}>
              <span>#</span>{i18n.t('header.text3')}
            </LinksP>
          </li>
          <li>
            <LinksP onClick={goToContacts}>
              <span>#</span>{i18n.t('header.text4')}
            </LinksP>
          </li>
          <li>
            <button onClick={handleSelectChange}>
              <Flag src={flag} alt="flag-img" />
            </button>
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
