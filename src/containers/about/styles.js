import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  min-height: 100vh;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 80%;

  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

export const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;

  .aboutTitle {
    width: auto;
  }
`;

export const AboutCentralContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    margin-top: 20px;
  }
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
    text-align: justify;
  }

  @media (max-width: 767px) {
    p {
      width: 350px;
      margin-top: 15px;
    }
  }
`;

export const AboutContentRight = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 30%;
    }
  }
`;

export const Retangle = styled.div`
  width: 16px;
  height: 16px;
  background: #c778dd;
  border: 1px solid #c778dd;
`;

export const SkillsTitle = styled.div`
  display: flex;
  margin-top: 112px;

  @media (max-width: 767px) {
    margin-top: 50px;
  }
`;

export const SkillsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-top: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SkillsLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const SkillsRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  gap: 10px;
  padding-left: 100px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 100%;
    padding-left: 0;
    flex-direction: row;
    justify-content: center;
    
  }
`;
export const FunFactsTittle = styled.div`
  margin-top: 83px;

  @media (max-width: 767px) {
    margin-top: 50px;
  }
`;

export const FunFactsContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 26px;

  @media (max-width: 767px) {
    img {
      display: none;
    }
  }
`;

export const FunFactsLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media (max-width: 767px) {
    justify-content: center;
    
  }
`;

export const Footer = styled.footer`
  margin-top: 80px;
  width: 100%;
  height: 50px;
`;
