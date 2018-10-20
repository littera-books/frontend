import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

// Styled
import Styled from './BonVoyage.styled';

class Product extends React.Component {
  render() {
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
}

Product.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Product;
