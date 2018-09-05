import React from 'react';
import { Link } from 'react-router-dom';

// Styled
import Styled from '../../styled/Base';

const Intro = () => (
  <Styled.FlexWrapper>
    <Link to="/main">
      <h1>Hello Littera!</h1>
    </Link>
  </Styled.FlexWrapper>
);

export default Intro;
