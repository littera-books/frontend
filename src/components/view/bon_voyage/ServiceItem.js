import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';
import dataConfig from '../../../config/dataConfig';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './styled';

// CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const determineProductName = (item) => {
  if (item.months === 0) {
    return 'A book with surprise';
  }

  if (item.months === 12) {
    return `${item.books} books for 1 year`;
  }

  if (item.books === 1) {
    return `${item.books} book for ${item.months} months`;
  }

  return `${item.books} books for ${item.months} months`;
};

class ServiceItem extends React.Component {
  componentDidMount() {
    const { filter } = this.props;
    filter(VisibilityFilters.SHOW_TITLE);
  }

  componentWillUnmount() {
    const { filter } = this.props;
    filter(VisibilityFilters.HIDE_TITLE);
  }

  renderItems() {
    const { items } = this.props;
    return _.map(items, (item) => {
      const rawPrice = item.price.toString();
      const discountedPrice = (item.price - item.discount_amount).toString();
      return (
        <Styled.ProductItem key={item.id} card>
          <Link to={`/service/${item.id}`}>
            <Element.ResponsiveImg
              src={dataConfig.baseUrl + item.url}
              alt="service-thumbnail"
            />
            <p>{determineProductName(item)}</p>
            <Styled.ItemHr />
            {item.discount_amount !== 0 && (
              <Styled.RawPriceSpan>
                {`₩ ${rawPrice.slice(0, -3)},${rawPrice.slice(-3)}`}&nbsp;
              </Styled.RawPriceSpan>
            )}
            <span>
              {`₩ ${discountedPrice.slice(0, -3)},${discountedPrice.slice(-3)}`}
            </span>
          </Link>
        </Styled.ProductItem>
      );
    });
  }

  render() {
    const { width } = this.props;
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
      return <Fragment>{this.renderItems()}</Fragment>;
    }

    return <Slider {...settings}>{this.renderItems()}</Slider>;
  }
}

ServiceItem.propTypes = {
  width: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  filter: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => ({
  filter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ServiceItem);
