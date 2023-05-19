import React, { useState, useEffect } from "react";
import Api from "../../services/api-github";

import Logo from "../../assets/logo.svg";
import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";
import LiveIcon from "../../assets/live.svg";
import Repository from "../../assets/repo.svg";

import {
  Container,
  MainContent,
  ProjectTitle,
  ProjectContent,
  GitHubProjects,
  Technologies,
  GitHubLi,
  GitHubInfo,
  GitHubButtons,
  GitHubList,
  Footer,
} from "./styles";

import { useHistory } from "react-router-dom";

import ContainerItens from "../../components/containeritens";
import Header from "../../components/header";
import LogoText from "../../components/logo";
import LinksHeader from "../../components/linksheader";
import LinksP from "../../components/linksp";
import Media from "../../components/media";
import H1 from "../../components/h1";
import P from "../../components/p";
import Button from "../../components/button";
import H1Animation from "../../components/h1animation";
import FooterContent from "../../components/footer";
import MediaButton from "../../components/mediabutton";

const Projects = () => {
  const history = useHistory();
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    async function fetchRepoData() {
      try {
        const response = await Api.get(
          "https://api.github.com/users/AndersonDinizDev/repos"
        );
        const filteredRepos = response.data.filter(
          (repo) =>
            repo.name !== "andersondinizdev" &&
            repo.name !== "portfolio" &&
            repo.name !== "projects-thumbnail"
        );
        const reposWithThumbnails = filteredRepos.map((repo) => {
          return {
            ...repo,
            thumbnailUrl: `https://raw.githubusercontent.com/AndersonDinizDev/projects-thumbnail/master/${repo.name}.png`,
          };
        });
        setRepo(reposWithThumbnails);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRepoData();
  }, []);

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
          <ProjectTitle>
            <H1Animation bold={true}>
              <span>/</span>projects
            </H1Animation>
            <P>List of my projects</P>
          </ProjectTitle>
          <ProjectContent>
            <H1>
              <span>#</span>complete-apps
            </H1>
            <GitHubProjects>
              <GitHubList>
                {repo.map((repository) => (
                  <GitHubLi key={repository.id}>
                    <img src={repository.thumbnailUrl} alt="github-banner" />
                    <Technologies>
                      <P isGitP={true}><span>Most used technology: </span>{repository.language}</P>
                    </Technologies>
                    <GitHubInfo>
                      <H1 isGitH1={true}>{repository.name}</H1>
                      <P isGitP={true}>{repository.description}</P>
                      <GitHubButtons>
                        <Button href={repository.homepage}>
                          <img src={LiveIcon} alt="live-icon" /> Live
                        </Button>
                        <Button href={repository.html_url} buttonSize={true}>
                          <img src={Repository} alt="repo-img" />
                          Repository
                        </Button>
                      </GitHubButtons>
                    </GitHubInfo>
                  </GitHubLi>
                ))}
              </GitHubList>
            </GitHubProjects>
          </ProjectContent>
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

export default Projects;
