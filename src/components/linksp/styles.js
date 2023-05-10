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

  span {
    color: #c778dd;
  }

  &:hover {
    opacity: 1;
  }
`;