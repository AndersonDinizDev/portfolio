import React from "react";
import Logo from "../../assets/logo.svg";
import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";
import AboutImage from "../../assets/about.svg";
import FunFacts from "../../assets/funfacts.svg";
import SkillsImg from "../../assets/skillsimg.svg";

import {
  Container,
  Footer,
  AboutTitle,
  AboutContent,
  AboutCentralContainer,
  AboutContentLeft,
  AboutContentRight,
  SkillsTitle,
  SkillsContent,
  FunFactsTittle,
  FunFactsContent,
  FunFactsLeft,
  SkillsLeft,
  SkillsRight,
} from "./styles";

import { useNavigate } from "react-router-dom";

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
import H1 from "../../components/h1";
import MediaButton from "../../components/mediabutton";
import MainContent from "../../components/maincontent";

const Contacts = () => {
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
        <MainContent isAboutContent={true}>
          <AboutContent>
          <AboutTitle>
            <H1Animation bold={true}>
              <span>/</span>about-me
            </H1Animation>
            <P>Who am i?</P>
          </AboutTitle>
          <AboutCentralContainer>
            <AboutContentLeft>
              <p>
                Hello, i'm Anderson! I'm a full-stack developer based in Rio de
                Janeiro, Brazil. I can develop responsive websites from scratch
                and raise them into modern user-friendly web experiences.
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </p>
            </AboutContentLeft>
            <AboutContentRight>
              <img src={AboutImage} alt="about-img"/>
            </AboutContentRight>
            </AboutCentralContainer>
            <SkillsTitle>
            <H1Animation bold={true} isSkillsH1={true}>
              <span>/</span>skills
            </H1Animation>
          </SkillsTitle>
          <SkillsContent>
            <SkillsLeft>
              <img src={SkillsImg} alt="skillsimg-img"/>
            </SkillsLeft>
            <SkillsRight>
            <SkillsCard>
              <div><H1 isAbooutH1={true}>Languages</H1></div>
              <P isAboutP={true}>Javascript</P>
            </SkillsCard>
            <SkillsCard>
              <div><H1 isAbooutH1={true}>Other</H1></div>
              <P isAboutP={true}> SCSS REST</P>
            </SkillsCard>
            <SkillsCard>
              <div><H1 isAbooutH1={true}>Tools</H1></div>
              <P isAboutP={true}> VSCode Linux Figma Git</P>
            </SkillsCard>
            <SkillsCard>
              <div><H1 isAbooutH1={true}>Databases</H1></div>
              <P isAboutP={true}> MongoDB Mysql PostgreeSQL</P>
            </SkillsCard>
            <SkillsCard>
              <div><H1 isAbooutH1={true}>Frameworks</H1></div>
              <P isAboutP={true}> React Express.js</P>
            </SkillsCard>
            </SkillsRight>
          </SkillsContent>
          <FunFactsTittle>
            <H1Animation bold={true}>
              <span>/</span>my-fun-facts
            </H1Animation>
          </FunFactsTittle>
          <FunFactsContent>
            <FunFactsLeft>
              <SkillsCard isFunFactsCard={true}><P isFunFactsP={true}>I Like pizza and coffe</P></SkillsCard>
              <SkillsCard isFunFactsCard={true}><P isFunFactsP={true}>My favorite movie is Matrix Reloaded</P></SkillsCard>
              <SkillsCard isFunFactsCard={true}><P isFunFactsP={true}>I like winter more than summer</P></SkillsCard>
              <SkillsCard isFunFactsCard={true}><P isFunFactsP={true}>I often bike with my friends</P></SkillsCard>
            </FunFactsLeft>
            <div><img src={FunFacts} alt="funfacts-img"/></div>
          </FunFactsContent>
          </AboutContent>
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

export default Contacts;