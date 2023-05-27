import styled, { keyframes } from "styled-components";

const BlinkCursor = keyframes`

from {
  border-right-color: rgba(255, 255, 255, 0.75);
}
to {
  border-right-color: transparent;
}

`

const TypingWorkingText = keyframes`
from {
  width: 0;
}
to {
  width:  250px;
}
`


export const PAnimated = styled.div`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #abb2bf;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  animation: ${BlinkCursor} 500ms steps(40) infinite, ${TypingWorkingText} 0.2s steps(25) 0.2s normal both;
  white-space: nowrap;
  overflow: hidden;
`;
