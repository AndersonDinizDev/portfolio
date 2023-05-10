import styled from "styled-components";

export const H1 = styled.h1`
font-family: 'Fira Code';
font-style: normal;
font-weight: ${props=> props.bold ? '600' : '500'};
font-size: ${props => props.isGitH1 ? '24px' : '32px'};
line-height: 42px;
color: #FFFFFF;
width: 100%;

span {
  color: #C778DD;}

`