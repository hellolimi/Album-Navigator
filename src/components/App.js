import React from 'react';
import { createGlobalStyle } from 'styled-components'
import AppRouter from './Router';

const GlobalStyle = createGlobalStyle`
  *{ padding:0; margin:0; box-sizing:border-box; }
  body{ background-color:#FFEEEE; }
  li{ list-style:none; }
  img{ display:block; }
  .wrap{ width:1180px; max-width:1180px; margin:0 auto; }
  :root {
    *{ font-size: 18px; }
    @media screen and (max-width: 1024px) {
      *{ font-size: 16px; }
    }
    @media screen and (max-width: 376px) {
      *{ font-size: 14px; }
    }
  }
`;

function App() {
  return <div className="wrap">
    <GlobalStyle />
    <AppRouter />
  </div>
}

export default App;
