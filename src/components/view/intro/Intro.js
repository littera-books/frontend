import React from 'react';
import { Link } from 'react-router-dom';

// Styled
import Wrapper from '../../../styled_base/Wrapper';

// data
import dataConfig from '../../../dataConfig';

export class Intro extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper.FlexWrapper>
        <Link to="/main">
          <h1>{dataConfig.introText}</h1>
        </Link>
      </Wrapper.FlexWrapper>
    );
  }
}

export default Intro;
