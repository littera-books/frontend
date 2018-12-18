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

const Card = ({
  items, url, name, alt,
}) => {
  const item = _.find(items, o => o.name === name);
  return (
    <Styled.CardWrapper>
      <Link to={url}>
        <Styled.InnerWrapper>
          <Styled.CardTitle>{alt}</Styled.CardTitle>
          <Element.ResponsiveImg
            src={dataConfig.baseUrl + item.url}
            alt={alt}
          />
        </Styled.InnerWrapper>
      </Link>
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
        <Wrapper.BasicBlockWrapper>
          <Wrapper.FlexWrapper>
            <Helmet pageTitle="Main" />
            <Card items={items} url="/about" name="about" alt="About" />
            {sessionStorage.getItem('token') ? (
              <Card items={items} url="/log" name="join" alt="Log" />
            ) : (
              <Card items={items} url="/sign-in" name="join" alt="Join" />
            )}
            <Card
              items={items}
              url="/bon-voyage"
              name="bon-voyage"
              alt="&quot;Bon Voyage!&quot;"
            />
            {sessionStorage.getItem('token') ? (
              <Card
                items={items}
                url="/all-ears/send"
                name="all-ears"
                alt="&quot;I'm All Ears&quot;"
              />
            ) : (
              <Card
                items={items}
                url="/all-ears"
                name="all-ears"
                alt="&quot;I'm All Ears&quot;"
              />
            )}
          </Wrapper.FlexWrapper>
        </Wrapper.BasicBlockWrapper>
      );
    }

    return (
      <Wrapper.CarouselGuardWrapper>
        <Wrapper.MobileBlockWrapper id="carousel">
          <Helmet pageTitle="Main" />
          <Slider {...settings}>
            <Card items={items} url="/about" name="m-about" alt="About" />
            {sessionStorage.getItem('token') ? (
              <Card items={items} url="/log" name="m-join" alt="Log" />
            ) : (
              <Card items={items} url="/sign-in" name="m-join" alt="Join" />
            )}
            <Card
              items={items}
              url="/bon-voyage"
              name="m-bon-voyage"
              alt="&quot;Bon Voyage!&quot;"
            />
            {sessionStorage.getItem('token') ? (
              <Card
                items={items}
                url="/all-ears/send"
                name="m-all-ears"
                alt="&quot;I'm All Ears&quot;"
              />
            ) : (
              <Card
                items={items}
                url="/all-ears"
                name="m-all-ears"
                alt="&quot;I'm All Ears&quot;"
              />
            )}
          </Slider>
        </Wrapper.MobileBlockWrapper>
      </Wrapper.CarouselGuardWrapper>
    );
  }
}

Card.propTypes = {
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
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
