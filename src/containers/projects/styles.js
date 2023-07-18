import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  min-height: 100vh;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 63%;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;

  .projectTittle {
    width: 180px;
  }
`;

export const CompleteProjectTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 66px;

  hr {
    width: 72%;
    margin-left: 20px;
    border-color: #c778dd;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

    hr {
      width: 100%;
      margin-left: 0;
    }
  }
`;

export const GitHubProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GitHubLi = styled.li`
  width: 18em;
  height: auto;
  border: 1px solid #abb2bf;
  background: transparent;
  margin-top: 48px;
  list-style: none;
  transition: all 200ms ease-in;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1);
  }

`;

export const Technologies = styled.hr`
  border: 0.5px solid #abb2bf;
`;

export const GitHubInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const GitHubButtons = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 16px;
`;

export const GitHubList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 50px;

  @media (max-width: 767px) {
  flex-wrap: '';
  flex-direction: column;
  align-items: center;
  }
`;

export const Footer = styled.footer`
  margin-top: 80px;
  width: 100%;
  height: 50px;

  @media (max-width: 767px) {
    margin-top: 50px;
  }
`;
