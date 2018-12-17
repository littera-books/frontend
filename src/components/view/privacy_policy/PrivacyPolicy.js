import React from 'react';
import ReactMarkdown from 'react-markdown';

// Components
import Helmet from '../../helmet/Helmet';

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
  }

  render() {
    const { markdown } = this.state;

    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Privacy Policy" />
        <Wrapper.ScrollWrapper>
          <Styled.Title>개인정보 처리방침</Styled.Title>
          <ReactMarkdown source={markdown} escapeHtml={false} />
        </Wrapper.ScrollWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

export default PrivacyPolicy;
