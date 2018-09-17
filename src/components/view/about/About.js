import React from 'react';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import StyledBase from '../../../styled/Base';

// Data
import dataConfig from '../../../dataConfig';

const About = () => (
  <StyledBase.FlexWrapper>
    <Helmet pageTitle="About" />
    <StyledBase.Paragraph>{dataConfig.aboutText}</StyledBase.Paragraph>
  </StyledBase.FlexWrapper>
);

export default About;
