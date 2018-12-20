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
import Styled from '../privacy_policy/PrivacyPolicy.styled';

import TermsOfUseMarkdown from '../../../assets/markdown/terms_of_use.md';

class TermsOfUse extends React.Component {
  state = {
    markdown: null,
  };

  componentWillMount() {
    fetch(TermsOfUseMarkdown)
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
        <Helmet pageTitle="Terms of Use" />
        <Wrapper.ScrollWrapper>
          <Styled.Title>이용약관</Styled.Title>
          <ReactMarkdown source={markdown} escapeHtml={false} />
          <HomeButton />
        </Wrapper.ScrollWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

TermsOfUse.propTypes = {
  scroll: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  scroll: filter => dispatch(setScroll(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(TermsOfUse);
