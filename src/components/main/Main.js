import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// Styled
import StyledBase from '../../styled/Base';
import Styled from './Styled_main';

// CSS
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

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

const CardList = () => (
  <Fragment>
    <Link to="/about">
      <Card img={About} name="About" />
    </Link>
    <Card img={Join} name="Join" />
    <Card img={BonVoyage} name="Von Voyage" />
    <Link to="/all-ears">
      <Card img={AllEars} name="I'm all ears" />
    </Link>
  </Fragment>
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
          <CardList />
        </StyledBase.FlexWrapper>
      );
    }

    return (
      <Styled.SliderWrapper id="carousel">
        <Slider {...settings}>
          <Link to="/about">
            <Card img={About} name="About" />
          </Link>
          <Card img={Join} name="Join" />
          <Card img={BonVoyage} name="Von Voyage" />
          <Link to="/all-ears">
            <Card img={AllEars} name="I'm all ears" />
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
