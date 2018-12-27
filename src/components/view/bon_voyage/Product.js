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
import dataConfig from '../../../dataConfig';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './BonVoyage.styled';

// CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Product extends React.Component {
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
      const price = item.price.toString();
      return (
        <Styled.ProductItem key={item.id} card>
          <Link to={`/product/${item.id}`}>
            <Element.ResponsiveImg
              width="70%"
              src={dataConfig.baseUrl + item.url}
              alt="product-thumbnail"
            />
            {item.months === 0 ? (
              <p>{`${item.books} book with surprise`}</p>
            ) : (
              <p>{`${item.books} book for ${item.months} months`}</p>
            )}
            <Styled.ItemHr />
            <p>{`${price.slice(0, -3)},${price.slice(-3)} KRW`}</p>
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
      infinite: true,
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

Product.propTypes = {
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
)(Product);
