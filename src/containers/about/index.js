import React from "react";
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
  Retangle,
} from "./styles";

import ContainerItens from "../../components/containeritens";
import Header from "../../components/header";
import Media from "../../components/media";
import FooterContent from "../../components/footer";
import H1Animation from "../../components/h1animation";
import P from "../../components/p";
import SkillsCard from "../../components/skillscard";
import H1 from "../../components/h1";
import MediaButton from "../../components/mediabutton";
import MainContent from "../../components/maincontent";
import PAnimated from "../../components/panimated";
import StatusCard from "../../components/statuscard";

const Contacts = () => {

  return (
    <Container>
      <Media>
        <hr />
        <div>
          <MediaButton href="https://www.linkedin.com/in/andersonldiniz/">
            <img src={Linkedin} alt="linkedin-icon" />
          </MediaButton>
          <MediaButton href="https://github.com/andersondinizdev">
            <img src={GitHub} alt="github-icon" />
          </MediaButton>
          <MediaButton href="https://t.me/andersondiniz159">
            <img src={Telegram} alt="telegram-icon" />
          </MediaButton>
        </div>
      </Media>
      <ContainerItens>
        <Header/>
        <MainContent>
          <AboutContent>
            <AboutTitle>
              <H1Animation bold="true">
                <span>/</span>about-me
              </H1Animation>
              <P>Who am i?</P>
            </AboutTitle>
            <AboutCentralContainer>
              <AboutContentLeft>
                <p>
                  Hello, I'm Anderson! I'm a full-stack developer living in Rio
                  de Janeiro, Brazil. I can develop responsive websites from
                  scratch and turn them into modern, user-friendly web
                  experiences. Turning my creativity and knowledge into websites
                  has been my passion for almost a year now. I have helped
                  several clients establish their online presence. I always
                  strive to learn about the newest technologies and frameworks.
                </p>
              </AboutContentLeft>
              <AboutContentRight>
                <img src={AboutImage} alt="about-img" />
                <StatusCard isaboutstatuscard="true">
                  <Retangle></Retangle>
                  <PAnimated isaboutpanimated="true">
                    {" "}
                    Full-Stack Developer
                  </PAnimated>
                </StatusCard>
              </AboutContentRight>
            </AboutCentralContainer>
            <SkillsTitle>
              <H1Animation bold="true" isskillsh1="true">
                <span>/</span>skills
              </H1Animation>
            </SkillsTitle>
            <SkillsContent>
              <SkillsLeft>
                <img src={SkillsImg} alt="skillsimg-img" />
              </SkillsLeft>
              <SkillsRight>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">Languages</H1>
                  </div>
                  <P isaboutp="true">Javascript</P>
                </SkillsCard>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">Other</H1>
                  </div>
                  <P isaboutp="true"> SCSS REST</P>
                </SkillsCard>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">Tools</H1>
                  </div>
                  <P isaboutp="true"> VSCode Linux Figma Git</P>
                </SkillsCard>
                <SkillsCard>
                  <div>
                    <H1 isabouth1="true">Databases</H1>
                  </div>
                  <P isaboutp="true"> MongoDB Mysql PostgreeSQL</P>
                </SkillsCard>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">Frameworks</H1>
                  </div>
                  <P isaboutp="true"> React Express.js</P>
                </SkillsCard>
              </SkillsRight>
            </SkillsContent>
            <FunFactsTittle>
              <H1Animation bold="true">
                <span>/</span>more-about-me
              </H1Animation>
            </FunFactsTittle>
            <FunFactsContent>
              <FunFactsLeft>
                <SkillsCard isfunfactscard="true">
                  <P isfunfactsp="true">I Like pizza and coffe</P>
                </SkillsCard>
                <SkillsCard isfunfactscard="true">
                  <P isfunfactsp="true">My favorite movie is Matrix Reloaded</P>
                </SkillsCard>
                <SkillsCard isfunfactscard="true">
                  <P isfunfactsp="true">I like winter more than summer</P>
                </SkillsCard>
                <SkillsCard isfunfactscard="true">
                  <P isfunfactsp="true">I often bike with my friends</P>
                </SkillsCard>
              </FunFactsLeft>
              <div>
                <img src={FunFacts} alt="funfacts-img" />
              </div>
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
