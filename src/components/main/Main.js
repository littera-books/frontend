import React from 'react';
import PropTypes from 'prop-types';

// Styled
import StyledBase from '../../styled/base';
import Styled from './Styled_main';

// Images
import Title from '../../assets/images/title.jpg';
import About from '../../assets/images/about.jpg';
import Join from '../../assets/images/join.jpg';
import BonVoyage from '../../assets/images/bon_voyage.jpg';
import AllEars from '../../assets/images/all_ears.jpg';

const TitleLogo = () => (
  <Styled.TitleWrapper>
    <Styled.SectionImg src={Title} alt="Title" />
  </Styled.TitleWrapper>
);

const Card = ({ img, name }) => (
  <Styled.CardWrapper>
    <h2>{name}</h2>
    <Styled.SectionImg src={img} alt={name} />
  </Styled.CardWrapper>
);

const Main = () => (
  <StyledBase.FlexWrapper>
    <Styled.MainWrapper>
      <StyledBase.FlexWrapper>
        <TitleLogo />
      </StyledBase.FlexWrapper>
      <StyledBase.FlexWrapper>
        <Card img={About} name="About" />
        <Card img={Join} name="Join" />
        <Card img={BonVoyage} name="Von Voyage" />
        <Card img={AllEars} name="I'm all ears" />
      </StyledBase.FlexWrapper>
    </Styled.MainWrapper>
  </StyledBase.FlexWrapper>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Main;
