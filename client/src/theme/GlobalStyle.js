import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
  
  .container {
    /* max-width: 1000px; */
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
  }

  .contents {
    padding-top: 50px ;
    padding-bottom: 50px ;
    min-height: calc(100vh - 150px);
  }

  a {
    transition: none;
  }
`;

export default GlobalStyle;
