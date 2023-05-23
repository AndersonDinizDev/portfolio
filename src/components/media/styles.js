import styled from "styled-components";

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  height: 300px;
  width: 50px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 105px;
  }

  hr {
    width: 191px;
    height: 1px;
    background: #abb2bf;
    transform: rotate(90deg);
  }

  img {
    transition: all 0.5s;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.5);
  }

  @media screen {
    
    max-width: 767px;
    display: none;
  }


    

`;