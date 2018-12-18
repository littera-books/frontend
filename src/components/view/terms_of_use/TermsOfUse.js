import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';
import {
  setScroll,
  ScrollFilters,
} from '../../../reducers/reducer.controlScroll';

// Components
import Helmet from '../../helmet/Helmet';

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

    const { filter, scroll } = this.props;
    filter(VisibilityFilters.HIDE_TITLE);
    scroll(ScrollFilters.ENABLE_SCROLL);
  }

  shouldComponentUpdate(nextState) {
    const { markdown } = this.state;
    return markdown !== nextState.markdown;
  }

  componentWillUnmount() {
    const { filter, scroll } = this.props;
    filter(VisibilityFilters.SHOW_TITLE);
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
        </Wrapper.ScrollWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

TermsOfUse.propTypes = {
  filter: PropTypes.func.isRequired,
  scroll: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  filter: filter => dispatch(setVisibilityFilter(filter)),
  scroll: filter => dispatch(setScroll(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(TermsOfUse);
