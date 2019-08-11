import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { getImg } from '../../../reducers/reducer.image';
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

// Card
import AboutCard from '../../../assets/card/about.png';
import JoinCard from '../../../assets/card/join.png';
import BonVoyageCard from '../../../assets/card/bon-voyage.png';
import AllEarsCard from '../../../assets/card/all-ears.png';

const CardItems = [
  {
    name: 'about',
    url: AboutCard,
  },
  {
    name: 'join',
    url: JoinCard,
  },
  {
    name: 'bon-voyage',
    url: BonVoyageCard,
  },
  {
    name: 'all-ears',
    url: AllEarsCard,
  },
];

const Card = ({
  isOpacity, items, url, name, alt,
}) => {
  const item = _.find(items, o => o.name === name);
  return (
    <Styled.CardWrapper>
      <Link to={url}>
        <Styled.InnerWrapper isOpacity={isOpacity}>
          <Styled.CardTitle>{alt}</Styled.CardTitle>
          <Element.ResponsiveImg src={item.url} alt={alt} />
        </Styled.InnerWrapper>
      </Link>
    </Styled.CardWrapper>
  );
};

export class Main extends React.Component {
  state = {
    isOpacity: true,
  };

  componentDidMount() {
    const { filter } = this.props;
    filter(VisibilityFilters.SHOW_TITLE);

    if (window.location.search === '?opacity=false') {
      this.setState({ isOpacity: false });
    }
  }

  componentWillUnmount() {
    const { filter } = this.props;
    filter(VisibilityFilters.HIDE_TITLE);
  }

  render() {
    const { isOpacity } = this.state;
    const { match, width } = this.props;
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    if (width > 414) {
      return (
        <Wrapper.FlexWrapper>
          <Wrapper.BetweenWrapper>
            <Helmet pageTitle={domainConfig.main.title} path={match.url} />
            <Card
              isOpacity={isOpacity}
              items={CardItems}
              url={domainConfig.about.path}
              name="about"
              alt="About"
            />
            {sessionStorage.getItem('token') ? (
              <Card
                isOpacity={isOpacity}
                items={CardItems}
                url={domainConfig.log.path}
                name="join"
                alt="Log"
              />
            ) : (
              <Card
                isOpacity={isOpacity}
                items={CardItems}
                url={domainConfig.signIn.path}
                name="join"
                alt="Join"
              />
            )}
            <Card
              isOpacity={isOpacity}
              items={CardItems}
              url={domainConfig.bonVoyage.path}
              name="bon-voyage"
              alt='"Bon Voyage!"'
            />
            <Card
              isOpacity={isOpacity}
              items={CardItems}
              url={domainConfig.allEars.path}
              name="all-ears"
              alt='"I&apos;m All Ears"'
            />
          </Wrapper.BetweenWrapper>
        </Wrapper.FlexWrapper>
      );
    }

    return (
      <Wrapper.CarouselGuardWrapper>
        <Wrapper.BasicBlockWrapper id="carousel">
          <Helmet pageTitle={domainConfig.main.title} path={match.url} />
          <Slider {...settings}>
            <Card
              isOpacity={isOpacity}
              items={CardItems}
              url={domainConfig.about.path}
              name="about"
              alt="About"
            />
            {sessionStorage.getItem('token') ? (
              <Card
                isOpacity={isOpacity}
                items={CardItems}
                url={domainConfig.log.path}
                name="join"
                alt="Log"
              />
            ) : (
              <Card
                isOpacity={isOpacity}
                items={CardItems}
                url={domainConfig.signIn.path}
                name="join"
                alt="Join"
              />
            )}
            <Card
              isOpacity={isOpacity}
              items={CardItems}
              url={domainConfig.bonVoyage.path}
              name="bon-voyage"
              alt='"Bon Voyage!"'
            />
            <Card
              isOpacity={isOpacity}
              items={CardItems}
              url={domainConfig.allEars.path}
              name="all-ears"
              alt='"I&apos;m All Ears"'
            />
          </Slider>
        </Wrapper.BasicBlockWrapper>
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
  width: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  items: state.image.items,
  width: state.controlWidth.width,
});

export const mapDispatchToProps = dispatch => ({
  getDetail: name => dispatch(getImg(name)),
  filter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
