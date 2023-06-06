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
import { i18n } from "../../translate/i18n";

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
            repo.name !== "projects-thumbnail" &&
            repo.name !== "shopping-cart" &&
            repo.name !== "users-api" &&
            repo.name !== "users-app"
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
            <div className="projectTittle">
            <H1Animation bold="true">
              <span>/</span>{i18n.t('projectsTittle.text1')}
            </H1Animation>
            </div>
            <div className="projectSub">
            <P>{i18n.t('projectsTittle.text2')}</P>
            </div>
          </ProjectTitle>
            <CompleteProjectTitle>
            <H1 isprojectcompleteapps="true">
              <span>#</span>{i18n.t('projectsList.text')}
            </H1>
            <hr/>
            </CompleteProjectTitle>
            <GitHubProjects>
              <GitHubList>
                {repo.map((repository) => (
                  <GitHubLi key={repository.id}>
                    <img src={repository.thumbnailUrl} alt="github-banner" />
                    <Technologies>
                      <P isgitptech="true"><span isgitptech="true">{i18n.t('projectsCardText.text')}</span>{repository.language}</P>
                    </Technologies>
                    <GitHubInfo>
                      <H1 isgith1="true">{repository.name}</H1>
                      <P isgitp="true">{repository.description}</P>
                      <GitHubButtons>
                        <Button href={repository.homepage} icon={LiveIcon}> {i18n.t('projectsButtonText.text1')}
                        </Button>
                        <Button href={repository.html_url} buttonsize="true" icon={Repository}>
                        {i18n.t('projectsButtonText.text2')}
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
          <p>{i18n.t('footer.text')}</p>
        </FooterContent>
        </Footer>
    </Container>
  );
};

export default Projects;
