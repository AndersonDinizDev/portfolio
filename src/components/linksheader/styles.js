import styled from "styled-components";

export const LinksHeader = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  @media (max-width: 767px) {
    display: none;
    flex-direction: column;
  }
`;
