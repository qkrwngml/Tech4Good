import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard';
  font-weight: normal;
  src: url('/fonts/PretendardVariable.ttf') format('truetype');
}

    *, *::before, *::after {
    box-sizing: border-box;
    font-family: "pretendard";
  }

  body {
    font-family: "pretendard";
      display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  margin: 0;
  min-height: 100vh;
  }

`;

export default GlobalStyle;
