import styled from "styled-components";

export const SkillsCard = styled.div`
  width: ${props => props.isFunFactsCard ? 'auto' : '192px'};
  width: ${props => props.isContactCard ? 'auto' : ''};
  height: ${props => props.isFunFactsCard ? '37px' : 'auto'};
  border: 1px solid #abb2bf;
  margin-top: ${props => props.isFunFactsCard ? '16px' : ''};
  padding: ${props => props.isFunFactsCard ? '5px' : ''};
  padding: ${props => props.isContactCard ? '20px' : ''};
  display: ${props => props.isContactCard ? 'flex' : ''};
  gap: ${props => props.isContactCard ? '10px' : ''};
  flex-direction: ${props => props.isContactCard ? 'column' : ''};

  div {
    border-bottom: 1px solid #abb2bf;
    padding: 5px;

  }
`;
