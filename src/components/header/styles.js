import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 32px;
  width: 100%;

  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`;
