import React from 'react';
import { Link } from 'react-router-dom';

// Styled
import Styled from './CloseButton.styled';

import Close from '../../../assets/images/cross-out.svg';

class CloseButton extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Link to="/main">
        <Styled.CloseButton
          src={Close}
          alt="close-button"
          width="16px"
          height="16px"
        />
      </Link>
    );
  }
}

export default CloseButton;
