import React from 'react';
import { Link } from 'react-router-dom';

// Styled
import Styled from './ScrollCloseButton.styled';

import Close from '../../../assets/images/cross-out.svg';

class HomeButton extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Styled.ScrollCloseButtonWrapper>
        <Link to="/main">
          <img
            src={Close}
            alt="scroll-close-button"
            width="16px"
            height="16px"
          />
        </Link>
      </Styled.ScrollCloseButtonWrapper>
    );
  }
}

export default HomeButton;
