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

  // 모바일 웹 환경 구축
  .mainContainer, .total, .map, .home, .community {
  margin-left: auto;
  margin-right: auto;
  background-color: #f2f2f2;
}

`;

export default GlobalStyle;
