import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { detailProduct } from '../../../reducers/reducer.product';
import dataConfig from '../../../dataConfig';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './BonVoyage.styled';

const PayMsg = React.memo(() => _.map(dataConfig.paymentMsg, (item, i) => <p key={i}>{item}</p>));

const OrderMsg = React.memo(() => _.map(dataConfig.orderMsg, (item, i) => <p key={i}>{item}</p>));

class Payment extends React.Component {
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
        <Helmet pageTitle="Payment" />
        <Styled.PaymentWrapper>
          <Element.BasicTitle>1. Member Information</Element.BasicTitle>
          <Element.BasicTitle>2. Address Information</Element.BasicTitle>
          <Element.BasicTitle>3. Payment Information</Element.BasicTitle>
          <PayMsg />
          <Element.BasicTitle>4. Order Information</Element.BasicTitle>
          <Wrapper.BetweenWrapper>
            <Wrapper.BasicFlexWrapper>
              <Styled.ImgBox>
                <Element.ResponsiveImg
                  src={dataConfig.baseUrl + item.url}
                  alt="thumbnail"
                />
              </Styled.ImgBox>
              <Styled.OrderBox style={{ marginTop: '1.5rem' }}>
                <p>{`- ${productTitle}`}</p>
                <p>- Free Shipping</p>
                <p>{`- ${price.slice(0, -3)},${price.slice(-3)} KRW`}</p>
              </Styled.OrderBox>
            </Wrapper.BasicFlexWrapper>
            <Styled.AcceptBox>
              <OrderMsg />
              <Element.SubmitButton type="submit">
                Confirm Purchase
              </Element.SubmitButton>
            </Styled.AcceptBox>
          </Wrapper.BetweenWrapper>
        </Styled.PaymentWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

Payment.propTypes = {
  item: PropTypes.shape({
    books: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  detail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  item: state.product.item,
});

const mapDispatchToProps = dispatch => ({
  detail: productId => dispatch(detailProduct(productId)),
});

export default reduxForm({
  form: 'PaymentForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Payment),
);
