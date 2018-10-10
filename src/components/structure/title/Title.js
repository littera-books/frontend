import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './Title.styled';

// Images
import Logo from '../../../assets/images/title.jpg';

const Title = ({ visibility }) => (
  <Styled.TitleWrapper style={{ visibility }}>
    <Link to="/main">
      <Element.ResponsiveImg src={Logo} alt="Title" />
    </Link>
  </Styled.TitleWrapper>
);

Title.propTypes = {
  visibility: PropTypes.string.isRequired,
};

export default Title;
