import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './ScrollCloseButton.styled';

import Close from '../../../assets/images/cross-out.svg';
import Back from '../../../assets/images/down-arrow.svg';

class HomeButton extends React.Component {
  state = {
    pathname: '/',
  };

  static getDerivedStateFromProps(state) {
    if (state.pathname !== window.location.pathname) {
      return { pathname: window.location.pathname };
    }
    return null;
  }

  shouldComponentUpdate(nextState) {
    const { pathname } = this.state;
    return pathname !== nextState.pathname;
  }

  render() {
    const { pathname } = this.state;
    const isDeepDepth = _.split(pathname, '/').length > 2;
    return (
      <Styled.ScrollCloseButtonWrapper>
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
          <Link to="/main">
            <img
              src={Close}
              alt="scroll-close-button"
              width="16px"
              height="16px"
            />
          </Link>
        )}
      </Styled.ScrollCloseButtonWrapper>
    );
  }
}

export default HomeButton;
