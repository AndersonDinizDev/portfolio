import styled from "styled-components";

export const LinksHeader = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  @media screen {
    
    max-width: 768px;
    display: none;
    flex-direction: column;
  }
`;