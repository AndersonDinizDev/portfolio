import styled, { keyframes } from "styled-components";

// KeyFrames - Animations
const BlinkCursor = keyframes`

from {
  border-right-color: rgba(255, 255, 255, 0.75);
}
to {
  border-right-color: transparent;
}

`

const TypingPhraseText = keyframes`
from {
  width: 0;
}
to {
  width: 650px;
}
`
const TypingAutorText = keyframes`
from {
  width: 0;
}
to {
  width: 130px;
}
`

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

  @media screen {
    
    max-width: 768px;
    flex-direction: column;
  }

`

export const HomeContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen {
    
    max-width: 767px;
    justify-content: center;
    align-items: center;
  }
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

  @media screen {

    max-width: 767px;
    width: 328px;
  }
`;

export const HomeContentP = styled.p`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #abb2bf;

  @media screen {
    max-width: 767px;
    width: 328px;
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

  @media screen {
    max-width: 767px;

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

  @media screen {
    max-width: 768px;
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

  @media screen {
     max-width: 767px;
     display: none;
  }
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
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    animation: ${BlinkCursor} 500ms steps(40) infinite, ${TypingPhraseText} 0.2s steps(50) 0.2s normal both;
    animation-delay: 0.7s;
    white-space: nowrap;
    overflow: hidden;
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
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    animation: ${BlinkCursor} 500ms steps(40) infinite, ${TypingAutorText} 0.2s steps(25) 0.2s normal both;
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
`;

export const Footer = styled.footer`
margin-top: 80px;
width: 100%;
height: 50px;

@media screen {
  max-width: 767px;
  margin-top: 50px;
  
}
`