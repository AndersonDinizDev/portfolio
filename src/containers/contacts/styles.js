import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  min-height: 100vh;
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;

  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

export const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactContentCentral = styled.div`
display: flex;
width: 100%;
justify-content: space-between;

@media (max-width: 767px) {

  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

`

export const ContactContentLeft = styled.div`
  display: flex;
  width: 600px;

  @media (max-width: 767px) {
    width: 350px;
    margin-top: 20px;
  }
`;

export const ContactContentRight = styled.div`
  display: flex;

  @media (max-width: 767px) {
    margin-top: 50px;
  }
`;

export const Footer = styled.footer`
  margin-top: 80px;
  width: 100%;
  height: 50px;
  bottom: 0;
  position: fixed;
`;
