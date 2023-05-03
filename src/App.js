import React from "react";
import Logo from "./assets/logo.svg";
import GitHub from "./assets/github.svg";
import Telegram from "./assets/telegram.svg";
import Linkedin from "./assets/linkedin.svg";
import Banner from "./assets/banner.svg";
import Aspas from "./assets/aspas.svg";
import Seta from "./assets/seta.svg";

import {
  Container,
  Menu,
  Link,
  Header,
  LogoText,
  Media,
  ContainerItens,
  HomeContent,
  HomeContentH2,
  HomeContentP,
  HomeContentButton,
  HomeContentLeft,
  HomeRetangle,
  HomeWorkingInfo,
  HomeRightContent,
  PhraseBox,
  AutorBox,
  PhraseContent,
  DropMenu,
  LanguageLink,
  LanguageUl,
} from "./styles";

const App = () => {
  return (
    <Container>
      <Media>
        <hr />
        <div>
          <img src={GitHub} alt="github-icon" />
          <img src={Telegram} alt="telegram-icon" />
          <img src={Linkedin} alt="linkedin-icon" />
        </div>
      </Media>
      <ContainerItens>
        <Header>
          <LogoText>
            <img src={Logo} alt="logo-img" />
            ANDERSON DINIZ
          </LogoText>
          <nav>
            <Menu>
              <li>
                <Link href="#">
                  <span>#</span>home
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>#</span>works
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>#</span>about-me
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>#</span>contacts
                </Link>
              </li>
            </Menu>
          </nav>
          <nav>
            <DropMenu>EN <img src={Seta} alt="seta-img"/></DropMenu>
            <LanguageUl>
              <li>
                <LanguageLink href="#">PT-BR</LanguageLink>
              </li>
              <li>
                <LanguageLink href="#">EN</LanguageLink>
              </li>
            </LanguageUl>
          </nav>
        </Header>
        <HomeContent>
          <HomeContentLeft>
            <HomeContentH2>Anderson is a <span>full-stack developer</span>, with<br/> a focus on the <span>front-end</span></HomeContentH2>
            <HomeContentP>He crafts responsive websites where technologies meet creativity</HomeContentP>
            <HomeContentButton>Contact me !!</HomeContentButton>
            </HomeContentLeft>
          <HomeRightContent>
            <img src={Banner} alt="banner-img"/>
            <HomeWorkingInfo><HomeRetangle></HomeRetangle><p> Currently working on <span>Portfolio</span></p></HomeWorkingInfo>
          </HomeRightContent>
        </HomeContent>
        <PhraseContent>
          <div>
          <PhraseBox><img src={Aspas} alt="aspas-img"/><p>With great power comes great electricity bill</p></PhraseBox>
          <AutorBox><img src={Aspas} alt="aspas-img"/><p>- Dr. Who</p></AutorBox>
          </div>
        </PhraseContent>
      </ContainerItens>
    </Container>
  );
};

export default App;
