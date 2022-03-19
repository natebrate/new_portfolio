import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }
  
  * {
    box-sizing: border-box;
  }
`