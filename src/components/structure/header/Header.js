import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import domainConfig from '../../../config/domainConfig';

// Styled
import Styled from './Header.styled';

// Images
import Logo from '../../../assets/images/lettre_nk.jpeg';

class Header extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { visibility } = this.props;
    return visibility !== nextProps.visibility;
  }

  render() {
    const { visibility } = this.props;
    return (
      <Styled.TitleWrapper
        style={{ visibility: visibility ? 'visible ' : 'hidden' }}
      >
        <Link to={domainConfig.main.path} style={{ height: '3.75rem' }}>
          <Styled.TitleImg src={Logo} alt="Title" />
        </Link>
      </Styled.TitleWrapper>
    );
  }
}

Header.propTypes = {
  visibility: PropTypes.bool.isRequired,
};

export default Header;
