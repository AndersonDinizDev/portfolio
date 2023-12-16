import styled from "styled-components";

export const SkillsCard = styled.div`
  width: auto;
  height: ${(props) => (props.isfunfactscard ? "auto" : "auto")};
  width: ${(props) => (props.isfunfactscard ? "350px" : "")};
  border: 1px solid #abb2bf;
  border: ${(props) => (props.isfunfactscard ? "none" : "")};
  margin-top: ${(props) => (props.isfunfactscard ? "16px" : "")};
  padding: ${(props) => (props.isfunfactscard ? "5px" : "")};
  padding: ${(props) => (props.iscontactcard ? "20px" : "")};
  display: ${(props) => (props.iscontactcard ? "flex" : "")};
  display: ${(props) => (props.isfunfactscard ? "flex" : "")};
  gap: ${(props) => (props.iscontactcard ? "10px" : "")};
  flex-direction: ${(props) => (props.iscontactcard ? "column" : "")};
  flex-direction: ${(props) => (props.isfunfactscard ? "column" : "")};

  div {
    border-bottom: 1px solid #abb2bf;
    padding: 5px;
  }

  img {
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .skillImage:hover {
    transform: scale(1.2);
  }

  @media (max-width: 767px) {
    height: ${(props) => (props.isfunfactscard ? "auto" : "")};
  }
`;
