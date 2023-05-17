import styled from "styled-components";

export const P = styled.p`
font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
color: ${props => props.isFunFactsP ? '#ABB2BF' : '#FFFFFF'};
color: ${props => props.isGitP ? '#ABB2BF' : ''};
color: ${props => props.isAboutP ? '#ABB2BF' : ''};
color: ${props => props.isContactP ? '#ABB2BF' : ''};
padding-left: ${props => props.isAboutP ? '5px' : ''};
display: ${props => props.isContactP ? 'flex' : ''};
align-items: ${props => props.isContactP ? 'center' : ''};
`