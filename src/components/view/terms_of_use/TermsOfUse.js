import React from 'react';
import ReactMarkdown from 'react-markdown';

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

export default TermsOfUse;
