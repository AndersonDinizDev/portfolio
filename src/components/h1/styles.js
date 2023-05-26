
import styled from "styled-components";

export const H1 = styled.h1`
font-family: 'Fira Code';
font-style: normal;
font-weight: ${props => props.bold ? '600' : '500'};
font-weight: ${props => props.isabouth1 ? '600' : ''};
font-size: ${props => props.isgith1 ? '24px' : '32px'};
font-size: ${props => props.isabouth1 ? '16px' : ''};
line-height: ${props => props.isgith1 ? '21px' : '42px'};
font-size: ${props => props.isprojectcompleteapps ? '1.5em' : ''};
color: #FFFFFF;

span {
  color: #C778DD;
}

@media (max-width: 767px) {
  font-size: ${props => props.isprojectcompleteapps ? '20px' : ''};
}

`