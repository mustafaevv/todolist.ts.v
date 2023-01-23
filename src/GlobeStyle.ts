import { createGlobalStyle } from "styled-components";

const GlobeStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
    background: #282c34;
  }
`;

export default GlobeStyle;
