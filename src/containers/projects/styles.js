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
`;

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const GitHubProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GitHubLi = styled.li`
  width: 330.58px;
  height: 450px;
  border: 1px solid #abb2bf;
  background: transparent;
  margin-top: 48px;
  list-style: none;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Technologies = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  width: 330.58px;
  background: transparent;
  border-bottom: 1px solid #abb2bf;
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
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 50px;
`;

export const Footer = styled.footer`
  margin-top: 80px;
  width: 100%;
  height: 50px;
`;
