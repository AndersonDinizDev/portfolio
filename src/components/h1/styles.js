
import styled from "styled-components";

export const H1 = styled.h1`
font-family: 'Fira Code';
font-style: normal;
font-weight: ${props => props.bold ? '600' : '500'};
font-weight: ${props => props.isAbooutH1 ? '600' : ''};
font-size: ${props => props.isGitH1 ? '24px' : '32px'};
font-size: ${props => props.isAbooutH1 ? '16px' : ''};
line-height: ${props => props.isGitH1 ? '21px' : '42px'};
color: #FFFFFF;

span {
  color: #C778DD;}

`