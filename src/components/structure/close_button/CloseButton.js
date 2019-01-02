import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styled
import Styled from './CloseButton.styled';

import Close from '../../../assets/images/cross-out.svg';

class CloseButton extends React.Component {
  state = {
    pathname: '/',
  };

  static getDerivedStateFromProps(state) {
    if (state.pathname !== window.location.pathname) {
      return { pathname: window.location.pathname };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { visibility } = this.props;
    const { pathname } = this.state;

    if (visibility !== nextProps.visibility) {
      return true;
    }

    if (pathname !== nextState.pathname) {
      return true;
    }

    return false;
  }

  render() {
    const { visibility } = this.props;
    const { pathname } = this.state;
    const isDeepDepth = _.startsWith(pathname, '/my-info');
    return (
      <Styled.CloseButtonWrapper
        style={{ visibility: visibility ? 'visible ' : 'hidden' }}
      >
        <Link to={isDeepDepth ? '/log' : '/main'}>
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
