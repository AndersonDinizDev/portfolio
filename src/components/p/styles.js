import styled from "styled-components";

export const P = styled.p`
font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
color: ${props => props.isGitP ? '#ABB2BF' : '#FFFFFF'};

`