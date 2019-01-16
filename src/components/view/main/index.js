import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { getImg } from '../../../reducers/reducer.image';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';

// Components
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './styled';

// CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = ({
  isOpacity, items, url, name, alt,
}) => {
  const item = _.find(items, o => o.name === name);
  return (
    <Styled.CardWrapper>
      <Link to={url}>
        <Styled.InnerWrapper isOpacity={isOpacity}>
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
    this.state = {
      width: 0,
      isDownloaded: false,
      isOpacity: true,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    const { filter } = this.props;
    filter(VisibilityFilters.SHOW_TITLE);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    if (window.location.search === '?opacity=false') {
      this.setState({ isOpacity: false });
    }
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
      return { isDownloaded: true };
    }
    return null;
  }

  componentWillUnmount() {
    const { filter } = this.props;
    filter(VisibilityFilters.HIDE_TITLE);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width, isOpacity } = this.state;
    const { items, match } = this.props;
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    if (items.length !== 4) {
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
            <Helmet pageTitle={domainConfig.main.title} path={match.url} />
            <Card
              isOpacity={isOpacity}
              items={items}
              url={domainConfig.about.path}
              name="about"
              alt="About"
            />
            {sessionStorage.getItem('token') ? (
              <Card
                isOpacity={isOpacity}
                items={items}
                url={domainConfig.log.path}
                name="join"
                alt="Log"
              />
            ) : (
              <Card
                isOpacity={isOpacity}
                items={items}
                url={domainConfig.signIn.path}
                name="join"
                alt="Join"
              />
            )}
            <Card
              isOpacity={isOpacity}
              items={items}
              url={domainConfig.bonVoyage.path}
              name="bon-voyage"
              alt='"Bon Voyage!"'
            />
            <Card
              isOpacity={isOpacity}
              items={items}
              url={domainConfig.allEars.path}
              name="all-ears"
              alt='"I&apos;m All Ears"'
            />
          </Wrapper.FlexWrapper>
        </Wrapper.BasicBlockWrapper>
      );
    }

    return (
      <Wrapper.CarouselGuardWrapper>
        <Wrapper.MobileBlockWrapper id="carousel">
          <Helmet pageTitle={domainConfig.main.title} path={match.url} />
          <Slider {...settings}>
            <Card
              isOpacity={isOpacity}
              items={items}
              url={domainConfig.about.path}
              name="about"
              alt="About"
            />
            {sessionStorage.getItem('token') ? (
              <Card
                isOpacity={isOpacity}
                items={items}
                url={domainConfig.log.path}
                name="join"
                alt="Log"
              />
            ) : (
              <Card
                isOpacity={isOpacity}
                items={items}
                url={domainConfig.signIn.path}
                name="join"
                alt="Join"
              />
            )}
            <Card
              isOpacity={isOpacity}
              items={items}
              url={domainConfig.bonVoyage.path}
              name="bon-voyage"
              alt='"Bon Voyage!"'
            />
            <Card
              isOpacity={isOpacity}
              items={items}
              url={domainConfig.allEars.path}
              name="all-ears"
              alt='"I&apos;m All Ears"'
            />
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
  isOpacity: PropTypes.bool.isRequired,
};

Main.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  items: state.image.items,
});

export const mapDispatchToProps = dispatch => ({
  getDetail: name => dispatch(getImg(name)),
  filter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
