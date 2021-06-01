import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Font from '../fonts/Font';
import AppRouter from './Router';

const GlobalStyle = createGlobalStyle`
  *{ padding:0; margin:0; box-sizing:border-box; font-family: 'Oswald', 'NotoSans', 'Malgun Gothic', sans serif; font-weight:300; }
  body{ background-color:#FFEEEE; }
  li{ list-style:none; }
  img{ display:block; max-width:100%; }
  fieldset{ border:none; }
  button{ cursor:pointer; appearance:none; }
  .wrap{ width:1180px; max-width:100%; margin:0 auto; }
  :root {
    *{ font-size: 18px; }
    @media screen and (max-width: 1024px) {
      width:100%; height:100vh;
      .wrap{padding:0 1rem;}
      *{ font-size: 18px; }
    }
    @media screen and (max-width: 376px) {
      *{ font-size: 16px; }
    }
  }
`;

function App() {
  return <div className="wrap">
    <Font />
    <GlobalStyle />
    <AppRouter />
  </div>
}

export default React.memo(App);
