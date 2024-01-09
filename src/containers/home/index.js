import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { i18n } from "../../translate/i18n";

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
import Media from "../../components/media";
import FooterContent from "../../components/footer";
import MediaButton from "../../components/mediabutton";
import MainContent from "../../components/maincontent";
import ButtonAnimated from "../../components/buttonanimated";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      i18n.t("homeStatusCardTexts.text1"),
      i18n.t("homeStatusCardTexts.text2"),
    ],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  const [text2] = useTypewriter({
    words: [
      i18n.t("homeAutomaticTexts.text1"),
      i18n.t("homeAutomaticTexts.text2"),
      i18n.t("homeAutomaticTexts.text3"),
    ],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  const [text3] = useTypewriter({
    words: [i18n.t("homeMessage.text")],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  const [text4] = useTypewriter({
    words: ["- David Ribeiro"],
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
          <HomeContent>
            <HomeContentLeft>
              <HomeContentH2>
                {i18n.t("homeWelcomeTexts.text1")}
                <br />
                <span className="nametxt">Anderson Diniz</span>
                <br /> {i18n.t("homeWelcomeTexts.text2")}{" "}
                <span>
                  {text2}
                  <Cursor />
                </span>
                <br />
              </HomeContentH2>
              <HomeContentP>{i18n.t("homeWelcomeTexts.text3")}</HomeContentP>
              <ButtonAnimated
                icon={Curriculum}
                href={i18n.t("buttonLink.text")}
              >
                Download CV
              </ButtonAnimated>
            </HomeContentLeft>
            <HomeRightContent>
              <img src={Banner} alt="banner-img" />
              <HomeWorkingInfo>
                <HomeRetangle></HomeRetangle>
                <p>
                  {text}
                  <span>
                    <Cursor />
                  </span>
                </p>
              </HomeWorkingInfo>
            </HomeRightContent>
          </HomeContent>
          <PhraseContent>
            <div>
              <PhraseBox>
                <img src={Aspas} alt="aspas-img" />
                <p>
                  {text3}
                  <span>
                    <Cursor />
                  </span>
                </p>
              </PhraseBox>
              <AutorBox>
                <img src={Aspas} alt="aspas-img" />
                <p>
                  {text4}
                  <span>
                    <Cursor />
                  </span>
                </p>
              </AutorBox>
            </div>
          </PhraseContent>
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

export default Home;
