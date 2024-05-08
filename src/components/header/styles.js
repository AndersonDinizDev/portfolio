import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 32px;
  width: 100%;
  z-index: 1;
  background-color: transparent;

  .bars {
    display: none;
  }

  @media (max-width: 767px) {
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    .bars {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "#ffffff")};
        transition: all 400ms ease-in-out;
        &::before,
        &::after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #ffffff;
          position: absolute;
        }
        &::before {
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }
        &::after {
          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    gap: 30px;

    .ismediabuttons {
      display: none;
      img {
        transition: all 0.5s;
        cursor: pointer;
        outline: none;
      }

      img:hover {
        transform: scale(1.5);
      }

      @media (max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
        gap: 25px;
      }
    }

    @media (max-width: 767px) {
      display: flex;
      position: fixed;
      flex-direction: column;
      background-color: #1e1e1e;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      height: ${(props) => (props.bar ? "100vh" : "0")};
      padding-left: 16px;
      padding-top: 90px;
      overflow: hidden;
      transition: height 400ms ease-in-out;
      gap: 40px;
    }

    button {
      transition: all 0.5s;
      cursor: pointer;
      background: none;
      border: none;
      width: 20px;
      height: 20px;

      &:hover {
        transform: scale(1.5);
      }
    }
  }
`;

export const LogoText = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  gap: 8px;
  width: 200px;
  z-index: 1;
`;

export const Flag = styled.img`
  width: 20px;
  height: 20px;
`;
