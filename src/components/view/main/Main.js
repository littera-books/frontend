import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { getImg } from '../../../reducers/reducer.image';
import dataConfig from '../../../dataConfig';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './Main.styled';

// CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = ({ items, name, alt }) => {
  const item = _.find(items, o => o.name === name);
  return (
    <Styled.CardWrapper>
      <Styled.CardTitle>{alt}</Styled.CardTitle>
      <Element.ResponsiveImg src={dataConfig.baseUrl + item.url} alt={alt} />
    </Styled.CardWrapper>
  );
};

export class Main extends React.Component {
  // 창의 너비가 일정 수준 이하로 좁아지면 화면 구조를 캐러셀로 변화시킨다
  // EventListener 가 창의 너비를 실시간으로 읽어들인다
  constructor(props) {
    super(props);
    this.state = { width: 0, isDownloaded: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      Object.keys(nextProps.items).length === 0
      && prevState.isDownloaded === false
    ) {
      nextProps.getDetail('about');
      nextProps.getDetail('join');
      nextProps.getDetail('bon-voyage');
      nextProps.getDetail('all-ears');
      nextProps.getDetail('m-about');
      nextProps.getDetail('m-join');
      nextProps.getDetail('m-bon-voyage');
      nextProps.getDetail('m-all-ears');
      return { isDownloaded: true };
    }
    return null;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    const { items } = this.props;
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    if (items.length !== 8) {
      return (
        <Wrapper.FlexWrapper>
          <p>Loading...</p>
        </Wrapper.FlexWrapper>
      );
    }

    if (width > 414) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet pageTitle="Main" />
          <Link to="/about">
            <Card items={items} name="about" alt="About" />
          </Link>
          {sessionStorage.getItem('token') ? (
            <Link to="/log">
              <Card items={items} name="join" alt="Log" />
            </Link>
          ) : (
            <Link to="/sign-in">
              <Card items={items} name="join" alt="Join" />
            </Link>
          )}
          <Link to="/bon-voyage">
            <Card
              items={items}
              name="bon-voyage"
              alt="&quot;Bon Voyage!&quot;"
            />
          </Link>
          {sessionStorage.getItem('token') ? (
            <Link to="/all-ears/send">
              <Card
                items={items}
                name="all-ears"
                alt="&quot;I'm All Ears&quot;"
              />
            </Link>
          ) : (
            <Link to="/all-ears">
              <Card
                items={items}
                name="all-ears"
                alt="&quot;I'm All Ears&quot;"
              />
            </Link>
          )}
        </Wrapper.FlexWrapper>
      );
    }

    return (
      <Wrapper.MobileBlockWrapper id="carousel">
        <Helmet pageTitle="Main" />
        <Slider {...settings}>
          <Link to="/about">
            <Card items={items} name="m-about" alt="About" />
          </Link>
          {sessionStorage.getItem('token') ? (
            <Link to="/log">
              <Card items={items} name="m-join" alt="Log" />
            </Link>
          ) : (
            <Link to="/sign-in">
              <Card items={items} name="m-join" alt="Join" />
            </Link>
          )}
          <Link to="/bon-voyage">
            <Card
              items={items}
              name="m-bon-voyage"
              alt="&quot;Bon Voyage!&quot;"
            />
          </Link>
          {sessionStorage.getItem('token') ? (
            <Link to="/all-ears/send">
              <Card
                items={items}
                name="m-all-ears"
                alt="&quot;I'm All Ears&quot;"
              />
            </Link>
          ) : (
            <Link to="/all-ears">
              <Card
                items={items}
                name="m-all-ears"
                alt="&quot;I'm All Ears&quot;"
              />
            </Link>
          )}
        </Slider>
      </Wrapper.MobileBlockWrapper>
    );
  }
}

Card.propTypes = {
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Main.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  items: state.image.items,
});

const mapDispatchToProps = dispatch => ({
  getDetail: name => dispatch(getImg(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
