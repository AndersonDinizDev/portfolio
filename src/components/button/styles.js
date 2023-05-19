import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.buttonSize ? "145px" : "109px")};
  width: ${props => (props.isDownloadCv ? "150px" : "")};
  height: 37px;
  border: 1px solid #c778dd;
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  outline: none;
  background: transparent;
  gap: 5px;
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    background: rgba(199, 120, 221, 0.2);
  }

  .button-icon {
    width: 20px;
    height: 20px;
  }
`;
