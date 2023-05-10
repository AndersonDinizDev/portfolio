import styled, { keyframes } from "styled-components";

const BlinkCursor = keyframes`

from {
  border-right-color: rgba(255, 255, 255, 0.75);
}
to {
  border-right-color: transparent;
}

`

const TypingH1 = keyframes`
from {
  width: 0;
}
to {
  width: 175px;
}
`

export const H1Animation = styled.h1`
font-family: 'Fira Code';
font-style: normal;
font-weight: ${props=> props.bold ? '600' : '500'};
font-size: ${props => props.isGitH1 ? '24px' : '32px'};
line-height: 42px;
color: #FFFFFF;
width: 100%;
border-right: 2px solid rgba(255, 255, 255, 0.75);
animation: ${BlinkCursor} 500ms steps(40) infinite, ${TypingH1} 0.2s steps(40) 0.2s normal both;
white-space: nowrap;
overflow: hidden;

span {
  color: #C778DD;}

`