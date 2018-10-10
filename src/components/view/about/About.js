import React from 'react';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

// Data
import dataConfig from '../../../dataConfig';

const About = () => (
  <Wrapper.FlexWrapper>
    <Helmet pageTitle="About" />
    <Element.Paragraph>{dataConfig.aboutText}</Element.Paragraph>
  </Wrapper.FlexWrapper>
);

export default About;
