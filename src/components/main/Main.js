import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styled
import StyledBase from '../../styled/Base';
import Styled from './Styled_main';

// Images
import About from '../../assets/images/about.jpg';
import Join from '../../assets/images/join.jpg';
import BonVoyage from '../../assets/images/bon_voyage.jpg';
import AllEars from '../../assets/images/all_ears.jpg';

const Card = ({ img, name }) => (
  <Styled.CardWrapper>
    <h2>{name}</h2>
    <StyledBase.ResponsiveImg src={img} alt={name} />
  </Styled.CardWrapper>
);

const Main = () => (
  <StyledBase.FlexWrapper>
    <Link to="/about">
      <Card img={About} name="About" />
    </Link>
    <Card img={Join} name="Join" />
    <Card img={BonVoyage} name="Von Voyage" />
    <Link to="/all-ears">
      <Card img={AllEars} name="I'm all ears" />
    </Link>
  </StyledBase.FlexWrapper>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Main;
