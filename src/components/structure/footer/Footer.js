import React from 'react';
import dataConfig from '../../../dataConfig';

// Styled
import Styled from './Footer.styled';

const Footer = () => (
  <Styled.FooterWrapper>
    <Styled.InnerWrapper>
      <p>{dataConfig.copyright}</p>
      <Styled.LinkWrapper>
        <span>Info</span>
        <span>&nbsp;|&nbsp;</span>
        <span>이용약관</span>
        <span>&nbsp;|&nbsp;</span>
        <span>개인정보처리방침</span>
      </Styled.LinkWrapper>
    </Styled.InnerWrapper>
  </Styled.FooterWrapper>
);

export default Footer;
