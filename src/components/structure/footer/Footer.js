import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dataConfig from '../../../dataConfig';

// Styled
import Styled from './Footer.styled';

const Footer = ({ visibility }) => (
  <Styled.FooterWrapper style={{ visibility }}>
    <Styled.InnerWrapper>
      <p>{dataConfig.copyright}</p>
      <Styled.LinkWrapper>
        <Link to="/business-info">INFO</Link>
        <Styled.SlashSpan>|</Styled.SlashSpan>
        <Link to="/privacy-policy">개인정보처리방침</Link>
        <Styled.SlashSpan>|</Styled.SlashSpan>
        <Link to="/terms-of-use">이용약관</Link>
      </Styled.LinkWrapper>
    </Styled.InnerWrapper>
  </Styled.FooterWrapper>
);

Footer.propTypes = {
  visibility: PropTypes.string.isRequired,
};

export default Footer;
