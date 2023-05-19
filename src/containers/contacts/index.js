import React from "react";
import Logo from "../../assets/logo.svg";
import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Email from "../../assets/email.svg";
import Tel from "../../assets/tel.svg";

import {
  Container,
  MainContent,
  Footer,
  ContactTitle,
  ContactContent,
  ContactContentLeft,
  ContactContentRight,
} from "./styles";

import { useHistory } from "react-router-dom";

import ContainerItens from "../../components/containeritens";
import Header from "../../components/header";
import LogoText from "../../components/logo";
import LinksHeader from "../../components/linksheader";
import LinksP from "../../components/linksp";
import Media from "../../components/media";
import FooterContent from "../../components/footer";
import H1Animation from "../../components/h1animation";
import P from "../../components/p";
import SkillsCard from "../../components/skillscard";
import MediaButton from "../../components/mediabutton";

const About = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToProjects = () => {
    history.push("/projects");
  };

  const goToAbout = () => {
    history.push("/about");
  };

  const goToContacts = () => {
    history.push("/contacts");
  };

  return (
    <Container>
      <Media>
        <hr />
        <div>
        <MediaButton href="https://www.linkedin.com/in/andersonldiniz/"><img src={Linkedin} alt="linkedin-icon" /></MediaButton>
        <MediaButton href="https://github.com/andersondinizdev"><img src={GitHub} alt="github-icon" /></MediaButton>
        <MediaButton href="https://t.me/andersondiniz159"><img src={Telegram} alt="telegram-icon" /></MediaButton>
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
          <ContactTitle>
            <H1Animation bold={true}>
              <span>/</span>contacts
            </H1Animation>
            <P>Who am i?</P>
          </ContactTitle>
          <ContactContent>
            <ContactContentLeft>
              <P isContactP={true}>
                I am looking for an opportunity to join the IT field. However,
                if you have another request or question, please don't hesitate
                to contact me.
              </P>
            </ContactContentLeft>
            <ContactContentRight>
              <SkillsCard isContactCard={true}>
                <P>Message me here</P>
                <P isContactP={true}><img src={Tel} alt="telegram-img"/> (21) 98083-9803</P>
                <P isContactP={true}><img src={Email} alt="email-img"/> andersondiniz159@gmail.com</P>
              </SkillsCard>
            </ContactContentRight>
          </ContactContent>
        </MainContent>
      </ContainerItens>
      <Footer>
        <FooterContent>
          <p>© Copyright 2023. Made by Anderson Diniz</p>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default About;