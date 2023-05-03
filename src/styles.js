import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  min-height: 100vh;
`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  height: 300px;
  width: 50px;

  div {
    display: flex;
    flex-direction: column;
    width: 17px;
    gap: 8px;
    margin-top: 105px;
  }

  hr {
    width: 191px;
    height: 1px;
    background: #abb2bf;
    transform: rotate(90deg);
  }

  img {
    width: 21px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 32px;
  width: 100%;
`;

export const LogoText = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  gap: 8px;
  width: 200px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;
export const Link = styled.li`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.7;

  span {
    color: #c778dd;
  }

  &:hover {
    opacity: 1;
  }
`;

export const DropMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #abb2bf;
`;

export const LanguageNav = styled.nav`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LanguageLink = styled.li`
  text-decoration: none;
`;

export const LanguageUl = styled.ul`
  list-style: none;
`;

export const HomeContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 62px;
`;

export const HomeContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HomeContentH2 = styled.h2`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  color: #ffffff;

  span {
    color: #c778dd;
  }
`;

export const HomeContentP = styled.p`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #abb2bf;
`;

export const HomeContentButton = styled.button`
  width: 148px;
  height: 37px;
  left: 171px;
  top: 387px;
  border: 1px solid #c778dd;
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  background-color: transparent;
  cursor: pointer;
`;

export const HomeRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeWorkingInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 402px;
  height: 37px;
  background: #282c33;
  border: 1px solid #abb2bf;
  background-color: transparent;

  p {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #abb2bf;
  }

  span {
    color: #ffffff;
  }
`;

export const HomeRetangle = styled.div`
  width: 16px;
  height: 16px;
  background: #c778dd;
  border: 1px solid #c778dd;
`;

export const PhraseContent = styled.div`
  margin-top: 112px;
  display: flex;
  justify-content: space-between;
`;

export const PhraseBox = styled.div`
  width: 712px;
  height: 95px;
  background: transparent;
  border: 1px solid #abb2bf;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: #ffffff;
  }

  img {
    display: inline-block;
    background-color: #1e1e1e;
    margin-bottom: 10px;
    position: absolute;
    padding: 10 10px;
    transform: translate(-320px, -40px);
    font-size: 14px;
  }
`;

export const AutorBox = styled.div`
  width: 162px;
  height: 63px;
  right: 1px;
  top: 95px;
  border: 1px solid #abb2bf;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;

  p {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    color: #ffffff;
  }

  img {
    display: inline-block;
    background-color: #1e1e1e;
    margin-bottom: 10px;
    position: absolute;
    padding: 10 10px;
    transform: translate(40px, -25px);
    font-size: 14px;
  }
`;
