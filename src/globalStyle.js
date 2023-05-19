import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body::-webkit-scrollbar {
  width: 15px;
}

body::-webkit-scrollbar-track {
  background: #1E1E1E;
}

body::-webkit-scrollbar-thumb {
  background-color: #C778DD;

}


`

export default GlobalStyle;