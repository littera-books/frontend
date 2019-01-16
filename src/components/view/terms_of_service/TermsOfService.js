import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import {
  setScroll,
  ScrollFilters,
} from '../../../reducers/reducer.controlScroll';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from '../privacy_policy/PrivacyPolicy.styled';

import TermsOfServiceMarkdown from '../../../assets/markdown/terms_of_service.md';

class TermsOfService extends React.Component {
  state = {
    markdown: null,
  };

  componentWillMount() {
    fetch(TermsOfServiceMarkdown)
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
        <Helmet pageTitle={domainConfig.termsOfService.title} />
        <Wrapper.ScrollWrapper>
          <Styled.Title>이&nbsp;용&nbsp;약&nbsp;관</Styled.Title>
          <ReactMarkdown source={markdown} escapeHtml={false} />
        </Wrapper.ScrollWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

TermsOfService.propTypes = {
  scroll: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  scroll: filter => dispatch(setScroll(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(TermsOfService);
