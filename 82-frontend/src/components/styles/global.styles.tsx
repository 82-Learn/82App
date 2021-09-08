import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import img from "./img/background1.png";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        color: white;
        height: auto; 
        margin-top: 20px;
        background-size: 100%;
        background-image: url(${img});
        
    }

    *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
    margin-bottom:70px;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

`;

