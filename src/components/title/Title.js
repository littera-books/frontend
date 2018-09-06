import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styled
import StyledBase from '../../styled/Base';
import Styled from './Styled_title';

// Images
import Logo from '../../assets/images/title.jpg';

const Title = ({ visibility }) => (
  <StyledBase.FlexWrapper style={{ visibility }}>
    <Styled.TitleWrapper>
      <Link to="/main">
        <StyledBase.ResponsiveImg src={Logo} alt="Title" />
      </Link>
    </Styled.TitleWrapper>
  </StyledBase.FlexWrapper>
);

Title.propTypes = {
  visibility: PropTypes.string.isRequired,
};

export default Title;
