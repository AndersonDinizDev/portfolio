import styled from "styled-components";

export const SkillsCard = styled.div`
  width: auto;
  height: ${props => props.isfunfactscard ? '37px' : 'auto'};
  border: 1px solid #abb2bf;
  margin-top: ${props => props.isfunfactscard ? '16px' : ''};
  padding: ${props => props.isfunfactscard ? '5px' : ''};
  padding: ${props => props.iscontactcard ? '20px' : ''};
  display: ${props => props.iscontactcard ? 'flex' : ''};
  gap: ${props => props.iscontactcard ? '10px' : ''};
  flex-direction: ${props => props.iscontactcard ? 'column' : ''};

  div {
    border-bottom: 1px solid #abb2bf;
    padding: 5px;

  }

  @media (max-width: 767px) {
      height: ${props => props.isfunfactscard ? 'auto' : ''};
  }

`;
