import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { i18n } from "../../translate/i18n";

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
import StatusCard from "../../components/statuscard";

const Contacts = () => {
  const [text] = useTypewriter({
    words: [i18n.t("homeAutomaticTexts.text1")],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 50,
  });

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
        <Header />
        <MainContent>
          <AboutContent>
            <AboutTitle>
              <div className="aboutTitle">
                <H1Animation bold="true">
                  <span>/</span>
                  {i18n.t("aboutTitle.text1")}
                </H1Animation>
              </div>
              <div className="aboutSub">
                <P>{i18n.t("aboutTitle.text2")}</P>
              </div>
            </AboutTitle>
            <AboutCentralContainer>
              <AboutContentLeft>
                <p>{i18n.t("aboutCentralText.text")}</p>
              </AboutContentLeft>
              <AboutContentRight>
                <img src={AboutImage} alt="about-img" />
                <StatusCard isaboutstatuscard="true">
                  <Retangle></Retangle>
                  <P isaboutpanimated="true">
                    {text}
                    <span>
                      <Cursor />
                    </span>
                  </P>
                </StatusCard>
              </AboutContentRight>
            </AboutCentralContainer>
            <SkillsTitle>
              <H1Animation bold="true" isskillsh1="true">
                <span>/</span>
                {i18n.t("skillsTittle.text")}
              </H1Animation>
            </SkillsTitle>
            <SkillsContent>
              <SkillsLeft>
                <img src={SkillsImg} alt="skillsimg-img" />
              </SkillsLeft>
              <SkillsRight>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">
                      {i18n.t("technologiesTexts.text1")}
                    </H1>
                  </div>
                  <P isaboutp="true">JavaScript, PHP, TypeScript</P>
                </SkillsCard>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">
                      {i18n.t("technologiesTexts.text2")}
                    </H1>
                  </div>
                  <P isaboutp="true">
                    {" "}
                    SCSS, Styled-Components, UX Design, Material UI, API{" "}
                  </P>
                </SkillsCard>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">
                      {i18n.t("technologiesTexts.text3")}
                    </H1>
                  </div>
                  <P isaboutp="true"> VSCode, Linux, Figma, Git </P>
                </SkillsCard>
                <SkillsCard>
                  <div>
                    <H1 isabouth1="true">
                      {i18n.t("technologiesTexts.text4")}
                    </H1>
                  </div>
                  <P isaboutp="true"> NodeJS, ExpressJS </P>
                </SkillsCard>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">
                      {i18n.t("technologiesTexts.text5")}
                    </H1>
                  </div>
                  <P isaboutp="true"> ReactJS </P>
                </SkillsCard>
              </SkillsRight>
            </SkillsContent>
            <FunFactsTittle>
              <H1Animation bold="true">
                <span>/</span>
                {i18n.t("moreAboutMeTittle.text")}
              </H1Animation>
            </FunFactsTittle>
            <FunFactsContent>
              <FunFactsLeft>
                <SkillsCard isfunfactscard="true">
                  <P isfunfactsp="true">{i18n.t("moreAboutMeTexts.text1")}</P>
                </SkillsCard>
                <SkillsCard isfunfactscard="true">
                  <P isfunfactsp="true">{i18n.t("moreAboutMeTexts.text2")}</P>
                </SkillsCard>
                <SkillsCard isfunfactscard="true">
                  <P isfunfactsp="true">{i18n.t("moreAboutMeTexts.text3")}</P>
                </SkillsCard>
                <SkillsCard isfunfactscard="true">
                  <P isfunfactsp="true">{i18n.t("moreAboutMeTexts.text4")}</P>
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
          <p>{i18n.t("footer.text")}</p>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Contacts;
