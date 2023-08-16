import React from "react";
import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Email from "../../assets/email.svg";
import Tel from "../../assets/tel.svg";

import {
  Container,
  Footer,
  ContactTitle,
  ContactContent,
  ContactContentCentral,
  ContactContentLeft,
  ContactContentRight,
} from "./styles";

import ContainerItens from "../../components/containeritens";
import Header from "../../components/header";
import Media from "../../components/media";
import FooterContent from "../../components/footer";
import H1Animation from "../../components/h1animation";
import P from "../../components/p";
import SkillsCard from "../../components/skillscard";
import MediaButton from "../../components/mediabutton";
import MainContent from "../../components/maincontent";
import { i18n } from "../../translate/i18n";

const About = () => {

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
        <Header/>
        <MainContent>
          <ContactContent>
          <ContactTitle>
            <div className="contactsTitle">
            <H1Animation bold="true">
              <span>/</span>{i18n.t('contactsTittle.text')}
            </H1Animation>
            </div>
            <div className="contactsSub">
            <P>{i18n.t('contactsSub.text')}</P>
            </div>
          </ContactTitle>
          <ContactContentCentral>
            <ContactContentLeft>
              <P iscontactleftp="true">
              {i18n.t('aboutText.text')}
              </P>
            </ContactContentLeft>
            <ContactContentRight>
              <SkillsCard iscontactcard="true">
                <P>{i18n.t('contactsCard.text')}</P>
                <P iscontactp="true"><img src={Tel} alt="telegram-img"/> (21) 98083-9803</P>
                <P iscontactp="true"><img src={Email} alt="email-img"/> contato.andersonldiniz@gmail.com</P>
              </SkillsCard>
            </ContactContentRight>
            </ContactContentCentral>
          </ContactContent>
        </MainContent>
      </ContainerItens>
      <Footer>
        <FooterContent>
          <p>{i18n.t('footer.text')}</p>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default About;
