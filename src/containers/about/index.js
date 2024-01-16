import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { i18n } from "../../translate/i18n";

import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";
import AboutImage from "../../assets/my.png";
import FunFacts from "../../assets/funfacts.svg";
import SkillsImg from "../../assets/skillsimg.svg";
import PhpImg from "../../assets/icons/php.svg";
import JsImg from "../../assets/icons/javascript.svg";
import TsImg from "../../assets/icons/typescript.svg";
import SassImg from "../../assets/icons/sass.svg";
import StyledImg from "../../assets/icons/styled.svg";
import MatImg from "../../assets/icons/material.svg";
import JImg from "../../assets/icons/jquery.svg";
import BtsImg from "../../assets/icons/bootstrap.svg";
import VsImg from "../../assets/icons/vscode.svg";
import DkImg from "../../assets/icons/docker.svg";
import LxImg from "../../assets/icons/linux.svg";
import FgImg from "../../assets/icons/figma.svg";
import GtImg from "../../assets/icons/git.svg";
import GhubImg from "../../assets/icons/github.svg";
import NodeImg from "../../assets/icons/node.svg";
import MysImg from "../../assets/icons/mysql.svg";
import ExpressImg from "../../assets/icons/express.svg";
import ReactImg from "../../assets/icons/react.svg";
import MagiicImg from "../../assets/logos/magiic.svg";
import AwsImg from "../../assets/icons/aws.svg";
import LaravelImg from "../../assets/icons/laravel.svg";

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
          <MediaButton href="https://t.me/andersondinizdev">
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
                <div className="aboutImg">
                  <img src={AboutImage} alt="about-img" />
                </div>
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
                  <img className="skillImage" title="JavaScript" style={{padding: "5px"}} width="40px" src={JsImg} alt="js-img"/>
                  <img className="skillImage" title="TypeScript" style={{padding: "5px"}} width="40px" src={TsImg} alt="ts-img"/>
                </SkillsCard>
                <SkillsCard>
                  <div>
                    <H1 isabouth1="true">
                      {i18n.t("technologiesTexts.text4")}
                    </H1>
                  </div>
                  <P isaboutp="true">
                  <img className="skillImage" title="PHP" style={{padding: "5px"}} width="40px" src={PhpImg} alt="php-img"/>
                  <img className="skillImage" title="Laravel" style={{padding: "5px"}} width="40px" src={LaravelImg} alt="laravel-img"/>
                  <img className="skillImage" title="MySQL" style={{padding: "5px"}} width="40px" src={MysImg} alt="mysql-img"/>
                  </P>
                </SkillsCard>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">
                      {i18n.t("technologiesTexts.text2")}
                    </H1>
                  </div>
                  <P isaboutp="true">
                  <img className="skillImage" title="SASS" style={{padding: "5px"}} width="40px" src={SassImg} alt="sass-img"/>
                  <img className="skillImage" title="Styled-Components" style={{padding: "5px"}} width="40px" src={StyledImg} alt="styled-img"/>
                  <img className="skillImage" title="Material-UI" style={{padding: "5px"}} width="40px" src={MatImg} alt="material-img"/>
                  <img className="skillImage" title="JQuery" style={{padding: "5px"}} width="40px" src={JImg} alt="jqery-img"/>
                  <img className="skillImage" title="Bootstrap" style={{padding: "5px"}} width="40px" src={BtsImg} alt="bootstrap-img"/>
                  </P>
                </SkillsCard>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">
                      {i18n.t("technologiesTexts.text5")}
                    </H1>
                  </div>
                  <P isaboutp="true">
                  <img className="skillImage" title="ReactJS" style={{padding: "5px"}} width="40px" src={ReactImg} alt="reactjs-img"/>
                  </P>
                </SkillsCard>
                <SkillsCard istechnologiescard="true">
                  <div>
                    <H1 isabouth1="true">
                      {i18n.t("technologiesTexts.text3")}
                    </H1>
                  </div>
                  <P isaboutp="true"> 
                  <img className="skillImage" title="VScode" style={{padding: "5px"}} width="40px" src={VsImg} alt="vscode-img"/>
                  <img className="skillImage" title="Docker" style={{padding: "5px"}} width="40px" src={DkImg} alt="docker-img"/>
                  <img className="skillImage" title="Amazon Web Services" style={{padding: "5px"}} width="40px" src={AwsImg} alt="aws-img"/>
                  <img className="skillImage" title="Linux" style={{padding: "5px"}} width="40px" src={LxImg} alt="linux-img"/>
                  <img className="skillImage" title="Figma" style={{padding: "5px"}} width="40px" src={FgImg} alt="figma-img"/>
                  <img className="skillImage" title="Git" style={{padding: "5px"}} width="40px" src={GtImg} alt="git-img"/>
                  <img className="skillImage" title="GitHub" style={{padding: "5px"}} width="40px" src={GhubImg} alt="github-img"/>
                   </P>
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
                <img width="230px" src={MagiicImg} alt="magiic-img"/>
                  <P isfunfactsp="true" isspace="true"><span>#</span>{i18n.t("moreAboutMeTexts.text1")}</P>
                  <P isfunfactsp2="true">{i18n.t("experiencesTexts.text1")}</P>
                </SkillsCard>
              </FunFactsLeft>
              <div>
                <img id="funfacts-img" src={FunFacts} alt="funfacts-img" />
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
