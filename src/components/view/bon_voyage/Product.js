import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Slider from 'react-slick';

// Styled
import Styled from './BonVoyage.styled';

// CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Promotion = () => (
  <Styled.ProductItem>
    <Styled.ItemTitleGroup>
      <p>promotion</p>
    </Styled.ItemTitleGroup>
    <Field
      name="product"
      component="input"
      type="radio"
      value="promotion"
      required
    />
  </Styled.ProductItem>
);

class Product extends React.Component {
  renderItems() {
    const { items } = this.props;
    return _.map(items, item => (
      <Styled.ProductItem key={item.id}>
        <Styled.ItemTitleGroup>
          <p>1 book</p>
          <p>X</p>
          <p>1 month</p>
          <p>X</p>
          <p>{`${item.months} months`}</p>
          <p>X</p>
          <p>{`${item.price} KRW`}</p>
        </Styled.ItemTitleGroup>
        <Field
          name="product"
          component="input"
          type="radio"
          value={`months-${item.months}`}
          required
        />
      </Styled.ProductItem>
    ));
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
      return (
        <Fragment>
          {this.renderItems()}
          <Promotion />
        </Fragment>
      );
    }

    return (
      <Slider {...settings}>
        {this.renderItems()}
        <Promotion />
      </Slider>
    );
  }
}

Product.propTypes = {
  width: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Product;
