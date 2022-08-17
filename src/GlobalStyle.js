import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard-Medium';
  }

  h1 {
    font-size: 58px;
    font-family: 'Pretendard-Bold';
  }

  h2 {
    font-size: 48px;
    font-family: 'Pretendard-Bold';
  }

  h3 {
    font-size: 34px;
    font-family: 'Pretendard-Bold';
  }

  h4 {
    font-size: 24px;
    font-family: 'Pretendard-Bold';
  }

  button{
    cursor: pointer;
  }

   a {
    color: #fff; 
    text-decoration: none; 
    outline: none
  } 
  a:hover, a:active {
    text-decoration: none; 
    color:#fff; 
    background-color:#f59000;
    }
`;

export default GlobalStyle;
