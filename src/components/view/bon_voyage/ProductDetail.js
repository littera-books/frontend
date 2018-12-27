import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailProduct } from '../../../reducers/reducer.product';
import dataConfig from '../../../dataConfig';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './BonVoyage.styled';

class ProductDetail extends React.Component {
  async componentDidMount() {
    const { match, detail } = this.props;
    await detail(match.params.productId);
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
            width="160px"
            src={dataConfig.baseUrl + item.url}
            alt="thumbnail"
          />
          <Element.BasicTitle align="center">{productTitle}</Element.BasicTitle>
          <p>{`${price.slice(0, -3)},${price.slice(-3)} KRW`}</p>
          <p>{item.description}</p>
          <Link to="/payment" style={{ width: '100%' }}>
            <Element.SubmitButton>구매하기</Element.SubmitButton>
          </Link>
        </Styled.ProductItem>
      </Wrapper.FlexWrapper>
    );
  }
}

ProductDetail.propTypes = {
  item: PropTypes.shape({}).isRequired,
  detail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  item: state.product.item,
});

const mapDispatchToProps = dispatch => ({
  detail: productId => dispatch(detailProduct(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);
