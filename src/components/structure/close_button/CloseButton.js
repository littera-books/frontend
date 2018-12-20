import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styled
import Styled from './CloseButton.styled';

import Close from '../../../assets/images/cross-out.svg';

class CloseButton extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { visibility } = this.props;
    return visibility !== nextProps.visibility;
  }

  render() {
    const { visibility } = this.props;
    return (
      <Styled.CloseButtonWrapper
        style={{ visibility: visibility ? 'visible ' : 'hidden' }}
      >
        <Link to="/main">
          <img src={Close} alt="close-button" width="16px" height="16px" />
        </Link>
      </Styled.CloseButtonWrapper>
    );
  }
}

CloseButton.propTypes = {
  visibility: PropTypes.bool.isRequired,
};

export default CloseButton;
