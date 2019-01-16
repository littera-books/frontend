import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import domainConfig from '../../../config/domainConfig';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './styled';

import Close from '../../../assets/images/cross-out.svg';
import Back from '../../../assets/images/down-arrow.svg';

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
    const isDeepDepth = _.split(pathname, '/').length > 2;
    return (
      <Styled.CloseButtonWrapper
        style={{ visibility: visibility ? 'visible ' : 'hidden' }}
      >
        {isDeepDepth ? (
          <Element.BasicButton
            type="button"
            onClick={() => window.history.back()}
          >
            <img
              src={Back}
              alt="back-button"
              width="16px"
              height="16px"
              style={{ transform: 'rotate(90deg)' }}
            />
          </Element.BasicButton>
        ) : (
          <Link to={domainConfig.main.path}>
            <img src={Close} alt="close-button" width="16px" height="16px" />
          </Link>
        )}
      </Styled.CloseButtonWrapper>
    );
  }
}

CloseButton.propTypes = {
  visibility: PropTypes.bool.isRequired,
};

export default CloseButton;
