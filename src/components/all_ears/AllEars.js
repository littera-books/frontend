import React from 'react';

// Components
import Helmet from '../helmet/Helmet';

// Styled
import StyledBase from '../../styled/Base';

const AllEars = () => (
  <StyledBase.FlexWrapper>
    <Helmet pageTitle="I'm all ears" />
    <a href="mailto:webmasterlittera@gmail.com">webmasterlittera@gmail.com</a>
  </StyledBase.FlexWrapper>
);

export default AllEars;
