import React from 'react';

// Components
import Helmet from '../helmet/Helmet';

// Styled
import StyledBase from '../../styled/Base';

// Data
import dataConfig from '../../dataConfig';

const About = () => (
  <StyledBase.FlexWrapper>
    <Helmet pageTitle="About" />
    <p>{dataConfig.aboutText}</p>
  </StyledBase.FlexWrapper>
);

export default About;
