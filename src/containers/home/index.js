import React from "react";
import { useNavigate } from 'react-router-dom';
import { useTypewriter, Cursor } from "react-simple-typewriter";

import Logo from "../../assets/logo.svg";
import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Banner from "../../assets/computer.svg";
import Aspas from "../../assets/aspas.svg";
import Curriculum from "../../assets/curriculum.svg";

import {
  Container,
  HomeContentH2,
  HomeContentP,
  HomeContentLeft,
  HomeRetangle,
  HomeWorkingInfo,
  HomeRightContent,
  PhraseBox,
  AutorBox,
  HomeContent,
  PhraseContent,
  Footer,
} from "./styles";

import ContainerItens from "../../components/containeritens";
import Header from "../../components/header";
import LogoText from "../../components/logo";
import LinksHeader from "../../components/linksheader";
import LinksP from "../../components/linksp";
import Media from "../../components/media";
import FooterContent from "../../components/footer";
import MediaButton from "../../components/mediabutton";
import MainContent from "../../components/maincontent";
import ButtonAnimated from "../../components/buttonanimated";

const Home = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  }

  const goToProjects = () => {
    navigate("/projects");
  }

  const goToAbout = () => {
    navigate("/about");
  }

  const goToContacts = () => {
    navigate("/contacts");
  }

  const [text] = useTypewriter({
    words: ['Currently working on portfólio', 'Currently studying C# and Javascript'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 50,
  })


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
          <HomeContent>
          <HomeContentLeft>
            <HomeContentH2>Anderson Diniz <span>full-stack developer</span>, with<br/> a focus on the <span>front-end</span></HomeContentH2>
            <HomeContentP>Creating responsive websites where technology meets creativity.</HomeContentP>
            <ButtonAnimated icon={Curriculum} href="https://drive.google.com/file/d/1CgW14hWZIV5TjydmRcMqP5lJbOQDEBKR/view">Download CV</ButtonAnimated>
            </HomeContentLeft>
          <HomeRightContent>
            <img src={Banner} alt="banner-img"/>
            <HomeWorkingInfo><HomeRetangle></HomeRetangle><p>{text}<span><Cursor/></span></p></HomeWorkingInfo>
          </HomeRightContent>
          </HomeContent>
          <PhraseContent>
          <div>
          <PhraseBox><img src={Aspas} alt="aspas-img"/><p>With great power comes great electricity bill</p></PhraseBox>
          <AutorBox><img src={Aspas} alt="aspas-img"/><p>- Dr. Who</p></AutorBox>
          </div>
        </PhraseContent>
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

export default Home;