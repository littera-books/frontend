import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import {
  setScroll,
  ScrollFilters,
} from '../../../reducers/reducer.controlScroll';

// Components
import Helmet from '../../helmet/Helmet';
import HomeButton from '../../structure/home_button/HomeButton';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './PrivacyPolicy.styled';

import PrivacyPolicyMarkdown from '../../../assets/markdown/privacy_policy.md';

class PrivacyPolicy extends React.Component {
  state = {
    markdown: null,
  };

  componentWillMount() {
    fetch(PrivacyPolicyMarkdown)
      .then(response => response.text())
      .then((text) => {
        this.setState({
          markdown: text,
        });
      });

    const { scroll } = this.props;
    scroll(ScrollFilters.ENABLE_SCROLL);
  }

  shouldComponentUpdate(nextState) {
    const { markdown } = this.state;
    return markdown !== nextState.markdown;
  }

  componentWillUnmount() {
    const { scroll } = this.props;
    scroll(ScrollFilters.UNABLE_SCROLL);
  }

  render() {
    const { markdown } = this.state;

    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Privacy Policy" />
        <Wrapper.ScrollWrapper>
          <Styled.Title>개인정보 처리방침</Styled.Title>
          <ReactMarkdown source={markdown} escapeHtml={false} />
          <HomeButton />
        </Wrapper.ScrollWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

PrivacyPolicy.propTypes = {
  scroll: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  scroll: filter => dispatch(setScroll(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(PrivacyPolicy);
