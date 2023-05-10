import React from "react";
import Logo from "../../assets/logo.svg";
import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";

import {
  Container,
  MainContent,
} from "./styles";

import { useHistory } from 'react-router-dom';

import ContainerItens from "../../components/containeritens";
import Header from "../../components/header";
import LogoText from "../../components/logo";
import LinksHeader from "../../components/linksheader";
import LinksP from "../../components/linksp";
import Media from "../../components/media";

const About = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  }

  const goToProjects = () => {
    history.push("/projects");
  }

  const goToAbout = () => {
    history.push("/about");
  }

  const goToContacts = () => {
    history.push("/contacts");
  }


  return (
    <Container>
      <Media>
        <hr />
        <div>
        <img src={Linkedin} alt="linkedin-icon" />
          <img src={GitHub} alt="github-icon" />
          <img src={Telegram} alt="telegram-icon" />
        </div>
      </Media>
      <ContainerItens>
        <Header>
          <LogoText>
            <img src={Logo} alt="logo-img" />
            ANDERSON DINIZ
          </LogoText>
          <nav>
            <LinksHeader>
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
            </LinksHeader>
          </nav>
        </Header>
        <MainContent>
        </MainContent>
      </ContainerItens>
    </Container>
  );
};

export default About;
