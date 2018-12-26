import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dataConfig from '../../../dataConfig';

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
            <Link to="/business-info">INFO</Link>
            <Styled.SlashSpan>|</Styled.SlashSpan>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Styled.SlashSpan>|</Styled.SlashSpan>
            <Link to="/terms-of-service">Terms of Service</Link>
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
