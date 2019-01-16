import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';

// Styled
import Styled from './Footer.styled';

class Footer extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { visibility } = this.props;
    return visibility !== nextProps.visibility;
  }

  render() {
    const { visibility } = this.props;
    return (
      <Styled.FooterWrapper
        style={{ visibility: visibility ? 'visible' : 'hidden' }}
      >
        <Styled.InnerWrapper>
          <p>{dataConfig.copyright}</p>
          <Styled.LinkWrapper>
            <Link to={domainConfig.businessInfo.path}>INFO</Link>
            <Styled.SlashSpan>|</Styled.SlashSpan>
            <Link to={domainConfig.privacyPolicy.path}>Privacy Policy</Link>
            <Styled.SlashSpan>|</Styled.SlashSpan>
            <Link to={domainConfig.termsOfService.path}>Terms of Service</Link>
          </Styled.LinkWrapper>
        </Styled.InnerWrapper>
      </Styled.FooterWrapper>
    );
  }
}

Footer.propTypes = {
  visibility: PropTypes.bool.isRequired,
};

export default Footer;
