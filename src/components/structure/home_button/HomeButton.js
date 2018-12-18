import React from 'react';
import { Link } from 'react-router-dom';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './HomeButton.styled';

import Icon from '../../../assets/images/icon.png';

class HomeButton extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Styled.HomeButtonWrapper>
        <Link to="/main">
          <Element.ResponsiveImg src={Icon} alt="icon" />
        </Link>
      </Styled.HomeButtonWrapper>
    );
  }
}

export default HomeButton;
