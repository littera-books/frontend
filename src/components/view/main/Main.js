import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import StyledBase from '../../../styled/Base';
import Styled from './Main.styled';

// CSS
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

// Images
import About from '../../../assets/images/about.jpg';
import Join from '../../../assets/images/join.jpg';
import BonVoyage from '../../../assets/images/bon_voyage.jpg';
import AllEars from '../../../assets/images/all_ears.jpg';

const Card = ({ img, name }) => (
  <Styled.CardWrapper>
    <Styled.CardTitle>{name}</Styled.CardTitle>
    <StyledBase.ResponsiveImg src={img} alt={name} />
  </Styled.CardWrapper>
);

class Main extends React.PureComponent {
  // 창의 너비가 일정 수준 이하로 좁아지면 화면 구조를 캐러셀로 변화시킨다
  // EventListener 가 창의 너비를 실시간으로 읽어들인다
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      lazyLoad: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    if (width > 414) {
      return (
        <StyledBase.FlexWrapper>
          <Helmet pageTitle="Main" />
          <Link to="/about">
            <Card img={About} name="About" />
          </Link>
          <Link to="/sign-in">
            <Card img={Join} name="Join" />
          </Link>
          <Card img={BonVoyage} name="&quot;Von Voyage!&quot;" />
          <Link to="/all-ears">
            <Card img={AllEars} name="&quot;I'm All Ears&quot;" />
          </Link>
        </StyledBase.FlexWrapper>
      );
    }

    return (
      <Styled.SliderWrapper id="carousel">
        <Helmet pageTitle="Main" />
        <Slider {...settings}>
          <Link to="/about">
            <Card img={About} name="About" />
          </Link>
          <Link to="/sign-in">
            <Card img={Join} name="Join" />
          </Link>
          <Card img={BonVoyage} name="&quot;Von Voyage!&quot;" />
          <Link to="/all-ears">
            <Card img={AllEars} name="&quot;I'm All Ears&quot;" />
          </Link>
        </Slider>
      </Styled.SliderWrapper>
    );
  }
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Main;
