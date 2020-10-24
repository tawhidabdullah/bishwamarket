import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    background-color:#f2f2f2;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
