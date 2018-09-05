import React from 'react';
import { Link } from 'react-router-dom';

// Styled
import StyledBase from '../../styled/base';
import Styled from './Styled_title';

// Images
import Logo from '../../assets/images/title.jpg';

const Title = () => (
  <StyledBase.FlexWrapper>
    <Styled.TitleWrapper>
      <Link to="/main">
        <StyledBase.ResponsiveImg src={Logo} alt="Title" />
      </Link>
    </Styled.TitleWrapper>
  </StyledBase.FlexWrapper>
);

export default Title;
