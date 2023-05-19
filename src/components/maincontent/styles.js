import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.isHomeMainContent ? 'center' : ''};
  width: ${props => props.isHomeMainContent ? '' : '63%'};
  align-items:  ${props => props.isHomeMainContent ? 'center' : 'baseline'};
  margin-top: 62px;

`