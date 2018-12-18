import React from 'react';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './About.styled';

// Data
import dataConfig from '../../../dataConfig';

class About extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="About" />
        <Styled.AboutWrapper>
          <p>{dataConfig.aboutText}</p>
        </Styled.AboutWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

export default About;
