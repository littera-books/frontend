import React from 'react';
import dataConfig from '../../../dataConfig';

// Styled
import Styled from './Footer.styled';

const Footer = () => (
  <Styled.FooterWrapper>
    <Styled.InnerWrapper>
      <Styled.InfoWrapper>
        <p>{dataConfig.copyright}</p>
      </Styled.InfoWrapper>
    </Styled.InnerWrapper>
  </Styled.FooterWrapper>
);

export default Footer;
