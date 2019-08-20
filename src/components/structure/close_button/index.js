import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import domainConfig from '../../../config/domainConfig';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './styled';

import Close from '../../../assets/images/icon_close.png';
import Back from '../../../assets/images/icon_back.png';

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
            <img src={Back} alt="back-button" width="12px" height="12px" />
          </Element.BasicButton>
        ) : (
          <Link to={domainConfig.main.path}>
            <img src={Close} alt="close-button" width="14px" height="14px" />
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
