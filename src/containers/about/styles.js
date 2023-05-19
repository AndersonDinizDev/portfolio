import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  min-height: 100vh;
`;

export const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  margin-top: 80px;
  width: 100%;
  height: 50px;
`;

export const AboutContent = styled.div`
  display: flex;
  margin-top: 68px;
  justify-content: space-between;
  width: 100%;
`;
export const AboutContentLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #abb2bf;
    width: 515px;
  }
`;

export const AboutContentRight = styled.div``;

export const SkillsTitle = styled.div`
  display: flex;
  margin-top: 112px;
`;

export const SkillsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const SkillsLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SkillsRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  gap: 10px;
  padding-left: 100px;
`;
export const FunFactsTittle = styled.div`
  margin-top: 83px;
`;

export const FunFactsContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 26px;
`;

export const FunFactsLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;