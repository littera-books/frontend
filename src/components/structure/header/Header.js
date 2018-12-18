import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styled
import Styled from './Header.styled';

// Images
import Logo from '../../../assets/images/lettre_nk.jpeg';

const Header = ({ visibility }) => (
  <Styled.TitleWrapper style={{ visibility }}>
    <Link to="/main" style={{ height: '3.75rem' }}>
      <Styled.TitleImg src={Logo} alt="Title" />
    </Link>
  </Styled.TitleWrapper>
);

Header.propTypes = {
  visibility: PropTypes.string.isRequired,
};

export default Header;
