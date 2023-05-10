import styled from "styled-components";

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width:  ${props => props.buttonSize ? '140px' : '109px'};
height: 37px;
border: 1px solid #C778DD;
font-family: 'Fira Code';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
color: #FFFFFF;
outline: none;
background: transparent;
gap: 5px;
cursor: pointer;

&:hover {
    background: rgba(199, 120, 221, 0.2);
  }

img {
    width: 25px;
}
`