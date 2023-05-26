import styled from "styled-components";

export const LinksP = styled.p`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.5s;
  position: relative;

  span {
    color: #c778dd;
  }

  &:hover {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: #c778dd;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  @media(max-width: 767px) {
    font-size: 20px;

    &:hover::after {
    width: 20%;
  }
    
  }
`;