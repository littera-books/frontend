import React from 'react';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';

// Data
import dataConfig from '../../../dataConfig';

const About = () => (
  <Wrapper.FlexWrapper>
    <Helmet pageTitle="About" />
    <p>{dataConfig.aboutText}</p>
  </Wrapper.FlexWrapper>
);

export default About;
