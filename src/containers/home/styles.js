import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  min-height: 100vh;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 30px;
    gap: 50px;
  }
`;

export const HomeContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;

export const HomeContentH2 = styled.h2`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 47px;
  color: #ffffff;
  text-align: justify;

  span {
    color: #c778dd;
    font-size: 25px;
  }

  .nametxt {
    color: #ffffff;
    font-weight: 700;
    font-size: 40px;
  }

  @media (max-width: 767px) {
    width: 380px;
    font-size: 20px;
    text-align: left;
    line-height: 35px;

    span {
      font-size: 17px;
    }

    .nametxt {
      font-size: 30px;
    }
  }
`;

export const HomeContentP = styled.p`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #abb2bf;

  @media (max-width: 767px) {
    width: 328px;
    text-align: center;
  }
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
  transition: all 0.7s;

  &:hover {
    background: rgba(199, 120, 221, 0.2);
  }
`;

export const HomeRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    img {
      width: 65%;
    }
  }
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
    white-space: nowrap;
    overflow: hidden;
  }

  span {
    color: #c778dd;
  }

  @media (max-width: 768px) {
    width: 380px;

    p {
      font-size: 15px;
    }
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

  @media (max-width: 767px) {
    display: none;
  }
`;

export const PhraseBox = styled.div`
  width: 740px;
  height: 95px;
  background: transparent;
  border: 1px solid #abb2bf;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  p {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: #ffffff;
    animation-delay: 0.7s;
    white-space: normal;
    overflow: hidden;
    text-align: center;
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

  span {
    color: #c778dd;
  }
`;

export const AutorBox = styled.div`
  width: 250px;
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
    animation-delay: 1s;
    white-space: nowrap;
    overflow: hidden;
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

  span {
    color: #c778dd;
  }
`;

export const Footer = styled.footer`
  margin-top: 80px;
  width: 100%;
  height: 50px;

  @media (max-width: 767px) {
    margin-top: 0;
    position: fixed;
    bottom: 0;
  }
`;
