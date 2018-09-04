import React from 'react';
import PropTypes from 'prop-types';

// Styled
import Styled from '../../styled/base';

const Card = ({ name }) => (
  <div>
    <h2>{name}</h2>
    <p>image</p>
  </div>
);

const Main = () => (
  <Styled.FlexWrapper>
    <Card name="About" />
    <Card name="Join" />
    <Card name="Von Voyage" />
    <Card name="I'm all ears" />
  </Styled.FlexWrapper>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Main;
