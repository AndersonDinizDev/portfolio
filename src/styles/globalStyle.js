import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
        background-color: #1e1e1e;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #c778dd;
    }
}

`;

export default GlobalStyle;
