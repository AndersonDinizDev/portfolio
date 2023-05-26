import React, { useState, useEffect } from "react";
import Api from "../../services/api-github";

import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";
import LiveIcon from "../../assets/live.svg";
import Repository from "../../assets/repo.svg";

import {
  Container,
  ProjectTitle,
  ProjectContent,
  GitHubProjects,
  Technologies,
  GitHubLi,
  GitHubInfo,
  GitHubButtons,
  GitHubList,
  Footer,
  CompleteProjectTitle,
} from "./styles";

import ContainerItens from "../../components/containeritens";
import Header from "../../components/header";
import Media from "../../components/media";
import H1 from "../../components/h1";
import P from "../../components/p";
import Button from "../../components/button";
import H1Animation from "../../components/h1animation";
import FooterContent from "../../components/footer";
import MediaButton from "../../components/mediabutton";
import MainContent from "../../components/maincontent";

const Projects = () => {
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
          <ProjectContent>
          <ProjectTitle>
            <H1Animation bold="true">
              <span>/</span>projects
            </H1Animation>
            <P>List of my projects</P>
          </ProjectTitle>
            <CompleteProjectTitle>
            <H1 isprojectcompleteapps="true">
              <span>#</span>complete-apps
            </H1>
            <hr/>
            </CompleteProjectTitle>
            <GitHubProjects>
              <GitHubList>
                {repo.map((repository) => (
                  <GitHubLi key={repository.id}>
                    <img src={repository.thumbnailUrl} alt="github-banner" />
                    <Technologies>
                      <P isgitptech="true"><span>Most used technology: </span>{repository.language}</P>
                    </Technologies>
                    <GitHubInfo>
                      <H1 isgith1="true">{repository.name}</H1>
                      <P isgitp="true">{repository.description}</P>
                      <GitHubButtons>
                        <Button href={repository.homepage} icon={LiveIcon}> Live
                        </Button>
                        <Button href={repository.html_url} buttonsize="true" icon={Repository}>
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