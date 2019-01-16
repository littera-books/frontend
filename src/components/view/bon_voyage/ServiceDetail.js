import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailProduct } from '../../../reducers/reducer.product';
import { determineProductName } from './ServiceItem';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './styled';

class ServiceDetail extends React.Component {
  async componentDidMount() {
    const { match, detail } = this.props;
    await detail(match.params.productId);
  }

  render() {
    const { item, match } = this.props;
    const rawPrice = item.price.toString();
    const discountedPrice = (item.price - item.discount_amount).toString();
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.service.title} path={match.url} />
        <Styled.ProductDetailWrapper>
          <Element.BasicTitle align="center">
            {determineProductName(item)}
          </Element.BasicTitle>
          <div>
            {item.discount_amount !== 0 && (
              <Styled.RawPriceSpan>
                {`₩ ${rawPrice.slice(0, -3)},${rawPrice.slice(-3)}`}&nbsp;
              </Styled.RawPriceSpan>
            )}
            <span>
              {`₩ ${discountedPrice.slice(0, -3)},${discountedPrice.slice(-3)}`}
            </span>
          </div>
          <div style={{ margin: '1.5rem 0' }}>
            <p>- A book with recommendation letter</p>
            <p>- Personally customized for you</p>
            <p>- {item.description}</p>
            <p>- Free shipping</p>
          </div>
          <Link to={`/payment/${item.id}`} style={{ width: '100%' }}>
            <Element.SubmitButton>Purchase</Element.SubmitButton>
          </Link>
        </Styled.ProductDetailWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

ServiceDetail.propTypes = {
  item: PropTypes.shape({
    books: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  detail: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
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
)(ServiceDetail);
