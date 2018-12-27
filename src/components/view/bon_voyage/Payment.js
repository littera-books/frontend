import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { readToken, retrieveInfo } from '../../../reducers/reducer.user';
import {
  detailProduct,
  sendSubscriptionNormal,
} from '../../../reducers/reducer.product';
import dataConfig from '../../../dataConfig';

// Components
import FormField from '../../../form/FormField';
import Helmet from '../../helmet/Helmet';
import PaymentMyInfo from './PaymentMyInfo';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './BonVoyage.styled';

const PayMsg = React.memo(() => _.map(dataConfig.paymentMsg, (item, i) => <p key={i}>{item}</p>));

const OrderMsg = React.memo(() => _.map(dataConfig.orderMsg, (item, i) => <p key={i}>{item}</p>));

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postCode: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.openPostCode = this.openPostCode.bind(this);
    this.inheritInfo = this.inheritInfo.bind(this);
    this.resetInfo = this.resetInfo.bind(this);
  }

  async componentDidMount() {
    const { match, detail } = this.props;
    await detail(match.params.productId);

    const script = document.createElement('script');
    script.id = 'daum';
    document.head.appendChild(script);
    script.src = dataConfig.daumPostApiUrl;
    script.onload = () => this.initialPostCode(this);
  }

  async onSubmit(payload) {
    const { send } = this.props;
    await send(payload);

    const { error, history } = this.props;
    if (!error) {
      history.replace('/main');
    }
  }

  initialPostCode() {
    const { change } = this.props;
    window.daum.postcode.load(() => {
      const postCode = new window.daum.Postcode({
        oncomplete: function oncomplete(data) {
          change('address', `(${data.zonecode}) ${data.address}`);
          alert('나머지 주소를 적어주세요');
        },
      });
      this.setState({ postCode });
    });
  }

  openPostCode() {
    const { postCode } = this.state;
    postCode.open();
  }

  inheritInfo() {
    const {
      initialize,
      userId,
      firstName,
      lastName,
      address,
      phone,
      match,
    } = this.props;

    initialize({
      productId: match.params.productId,
      userId,
      firstName,
      lastName,
      address,
      phone,
    });
  }

  resetInfo() {
    const { initialize, userId } = this.props;
    initialize({
      userId,
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
    });
  }

  render() {
    const { item, handleSubmit, error } = this.props;
    const price = item.price.toString();
    const productTitle = item.months === 0
      ? `${item.books} book with surprise`
      : `${item.books} book for ${item.months} months`;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Payment" />
        <Styled.PaymentWrapper>
          <Element.BasicTitle>1. Member Information</Element.BasicTitle>
          <PaymentMyInfo />
          <Wrapper.BasicFlexWrapper>
            <Element.BasicTitle>2. Address Information</Element.BasicTitle>
            <Styled.FlexForm>
              <label htmlFor="my-value">
                <span>It&#39;s for me&nbsp;</span>
                <input
                  type="radio"
                  name="info"
                  value="myValue"
                  id="my-value"
                  onChange={this.inheritInfo}
                />
              </label>
              <label htmlFor="someone-value">
                <span>It&#39;s Someone else&nbsp;</span>
                <input
                  type="radio"
                  name="info"
                  value="someoneValue"
                  id="someone-value"
                  onChange={this.resetInfo}
                  defaultChecked
                />
              </label>
            </Styled.FlexForm>
          </Wrapper.BasicFlexWrapper>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <FormField.PaymentFormField
              error={error}
              openPostCode={this.openPostCode}
            />
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
          </form>
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
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
  detail: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  item: state.product.item,
  userId: state.user.userId,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  address: state.user.address,
  phone: state.user.phone,
  read: PropTypes.func.isRequired,
  retrieve: PropTypes.func.isRequired,
  error: state.product.error,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  retrieve: userId => dispatch(retrieveInfo(userId)),
  detail: productId => dispatch(detailProduct(productId)),
  send: payload => dispatch(sendSubscriptionNormal(payload)),
});

export default reduxForm({
  form: 'PaymentForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Payment),
);
