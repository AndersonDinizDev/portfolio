import styled from "styled-components";

export const P = styled.p`
font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
color: ${props => props.isfunfactsp ? '#ABB2BF' : '#FFFFFF'};
color: ${props => props.isfunfactsp2 ? '#ABB2BF' : ''};
color: ${props => props.isgitp ? '#ABB2BF' : ''};
color: ${props => props.isaboutpanimated ? '#ABB2BF' : ''};
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
margin-top: ${props => props.isfunfactsp2 ? '12px' : ''};
border-top: ${props => props.isfunfactsp2 ? '1px' : ''} ${props => props.isfunfactsp2 ? 'solid' : ''} ${props => props.isfunfactsp2 ? '#8f5b9e' : ''};
text-align: ${props => props.iscontactleftp ? 'justify' : ''};
text-align: ${props => props.isfunfactsp ? 'justify' : ''};
text-align: ${props => props.isfunfactsp2 ? 'justify' : ''};
font-size: ${props => props.isgitptech ? '0.9em' : ''};
margin-top: ${props => props.isspace ? '10px' : ''};
font-size: ${props => props.isfunfactsp2 ? '14px' : ''};
text-align: ${props => props.isfunfactsp2 ? 'left' : ''};;

span {
    color: ${props => props.isgitptech ? '#ABB2BF' : ''};
    color: ${props => props.isfunfactsp ? '#8f5b9e' : ''};
  }

@media (max-width: 767px) {
    margin-top: ${props => props.iscontactleftp ? '30px' : ''};
}
`