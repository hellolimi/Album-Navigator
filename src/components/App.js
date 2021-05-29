import React from 'react';
import { createGlobalStyle } from 'styled-components'
import AppRouter from './Router';

const GlobalStyle = createGlobalStyle`
  *{ padding:0; margin:0; box-sizing:border-box; }
  body{ background-color:#FFEEEE; }
  li{ list-style:none; }
  img{ display:block; }
  :root {
    font-size: 18px;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 376px) {
      font-size:14px;
    }
  }
`;

function App() {
  return <>
    <GlobalStyle />
    <AppRouter />
  </>
}

export default App;
