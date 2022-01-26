import React from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import { FooterContainer } from './Footer.style';

function Footer(props) {
  return (
    <FooterContainer>
      <GlobalStyle />
      <div className="container">
        <p className="copyright">Copyrignt © {new Date().getFullYear()} Yujeong Lee</p>
        <a href="#;">thisyujeong</a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
