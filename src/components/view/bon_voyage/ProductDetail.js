import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailProduct } from '../../../reducers/reducer.product';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';
import dataConfig from '../../../dataConfig';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './BonVoyage.styled';

class ProductDetail extends React.Component {
  async componentDidMount() {
    const { match, detail, filter } = this.props;
    await filter(VisibilityFilters.SHOW_TITLE);
    await detail(match.params.productId);
  }

  componentWillUnmount() {
    const { filter } = this.props;
    filter(VisibilityFilters.HIDE_TITLE);
  }

  render() {
    const { item } = this.props;
    const price = item.price.toString();
    const productTitle = item.months === 0
      ? `${item.books} book with surprise`
      : `${item.books} book for ${item.months} months`;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={productTitle} />
        <Styled.ProductItem>
          <Element.ResponsiveImg
            width="140px"
            src={dataConfig.baseUrl + item.url}
            alt="thumbnail"
          />
          <Element.BasicTitle align="center">{productTitle}</Element.BasicTitle>
          <p>{`${price.slice(0, -3)},${price.slice(-3)} KRW`}</p>
          <p>{item.description}</p>
          <Link to={`/payment/${item.id}`} style={{ width: '100%' }}>
            <Element.SubmitButton>구매하기</Element.SubmitButton>
          </Link>
        </Styled.ProductItem>
      </Wrapper.FlexWrapper>
    );
  }
}

ProductDetail.propTypes = {
  item: PropTypes.shape({
    books: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  detail: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  item: state.product.item,
});

const mapDispatchToProps = dispatch => ({
  detail: productId => dispatch(detailProduct(productId)),
  filter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);