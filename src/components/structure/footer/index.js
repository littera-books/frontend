import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';

// Styled
import Styled from './styled';

class Footer extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { visibility, width } = this.props;
    return visibility !== nextProps.visibility || width !== nextProps.width;
  }

  render() {
    const { visibility, width } = this.props;
    return (
      <Styled.FooterWrapper
        style={{ visibility: visibility ? 'visible' : 'hidden' }}
      >
        <Styled.InnerWrapper>
          <p>{dataConfig.copyright}</p>
          <Styled.LinkWrapper
            style={{
              visibility: visibility && width > 414 ? 'visible' : 'hidden',
            }}
          >
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
  width: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  width: state.controlWidth.width,
});

export default connect(mapStateToProps)(Footer);
