import styled from "styled-components";

export const P = styled.p`
font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
color: ${props => props.isfunfactsp ? '#ABB2BF' : '#FFFFFF'};
color: ${props => props.isgitp ? '#ABB2BF' : ''};
color: ${props => props.isgitptech ? '#ABB2BF' : ''};
color: ${props => props.isaboutp ? '#ABB2BF' : ''};
color: ${props => props.iscontactp ? '#ABB2BF' : ''};
color: ${props => props.iscontactleftp ? '#ABB2BF' : ''};
width: ${props => props.iscontactleftp ? '500px' : ''};
padding-left: ${props => props.isaboutp ? '5px' : ''};
display: ${props => props.iscontactp ? 'flex' : ''};
display: ${props => props.iscontactleftp ? 'flex' : ''};
align-items: ${props => props.iscontactp ? 'center' : ''};
align-items: ${props => props.iscontactleftp  ? 'center' : ''};
margin-top: ${props => props.isgitp ? '16px' : ''};
`