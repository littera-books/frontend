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
import {
  setScroll,
  ScrollFilters,
} from '../../../reducers/reducer.controlScroll';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';
import { determineProductName } from './ServiceItem';

// Components
import FormField from '../../../form/FormField';
import Helmet from '../../helmet';
import PaymentMyInfo from './PaymentMyInfo';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './styled';

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

    const { scroll } = this.props;
    await scroll(ScrollFilters.ENABLE_SCROLL);

    const script = document.createElement('script');
    script.id = 'daum';
    document.head.appendChild(script);
    script.src = dataConfig.daumPostApiUrl;
    script.onload = () => this.initialPostCode(this);
  }

  componentWillUnmount() {
    const { scroll } = this.props;
    scroll(ScrollFilters.UNABLE_SCROLL);
  }

  async onSubmit(payload) {
    const { send } = this.props;
    await send(payload);

    const { error, history } = this.props;
    if (!error) {
      history.replace(domainConfig.paymentComplete.path);
    }
  }

  initialPostCode() {
    const { change } = this.props;
    window.daum.postcode.load(() => {
      const postCode = new window.daum.Postcode({
        oncomplete: function oncomplete(data) {
          change('address', `(${data.zonecode}) ${data.address}`);
          alert('나머지 주소를 적어주세요');
          const extraAddress = document.querySelectorAll(
            'input[name=extraAddress]',
          );
          extraAddress[1].focus();
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
      extraAddress,
      phone,
      match,
    } = this.props;

    initialize({
      productId: match.params.productId,
      userId,
      firstName,
      lastName,
      address,
      extraAddress,
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
      extraAddress: '',
      phone: '',
    });
  }

  render() {
    const {
      item, handleSubmit, error, match,
    } = this.props;
    const discountedPrice = (item.price - item.discount_amount).toString();
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.payment.title} path={match.url} />
        <Wrapper.ScrollWrapper>
          <Styled.PaymentWrapper>
            <Element.BasicTitle>1. Member Information</Element.BasicTitle>
            <PaymentMyInfo />
            <Element.BasicTitle marginTop="2.5rem">
              2. Address Information
            </Element.BasicTitle>
            <Styled.FlexForm>
              <label htmlFor="my-value" style={{ marginRight: '1rem' }}>
                <Styled.OptionSpan>It&#39;s for me</Styled.OptionSpan>
                <input
                  type="radio"
                  name="info"
                  value="myValue"
                  id="my-value"
                  onChange={this.inheritInfo}
                />
              </label>
              <label htmlFor="someone-value">
                <Styled.OptionSpan>It&#39;s for someone else</Styled.OptionSpan>
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
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <FormField.PaymentFormField
                error={error}
                openPostCode={this.openPostCode}
              />
              <Element.BasicTitle marginTop="2.5rem">
                3. Payment Information
              </Element.BasicTitle>
              <Styled.AcceptBox lineHeight="3">
                <PayMsg />
              </Styled.AcceptBox>
              <Element.BasicTitle marginTop="2.5rem">
                4. Order Information
              </Element.BasicTitle>
              <Styled.ProductItem>
                <Element.ResponsiveImg
                  width="100px !important"
                  src={dataConfig.baseUrl + item.url}
                  alt="product-thumbnail"
                />
                <p>{determineProductName(item)}</p>
                <Styled.ItemHr />
                <span>
                  {`₩ ${discountedPrice.slice(0, -3)},${discountedPrice.slice(
                    -3,
                  )}`}
                </span>
              </Styled.ProductItem>
              <Styled.AcceptBox padding="1.25rem 0.75rem">
                <OrderMsg />
                <Element.SubmitButton type="submit" margin="1rem 0 0 0">
                  Confirm Purchase
                </Element.SubmitButton>
              </Styled.AcceptBox>
            </form>
          </Styled.PaymentWrapper>
        </Wrapper.ScrollWrapper>
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
    url: PropTypes.string.isRequired,
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
  extraAddress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  scroll: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  item: state.product.item,
  userId: state.user.userId,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  address: state.user.address,
  extraAddress: state.user.extraAddress,
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
  scroll: filter => dispatch(setScroll(filter)),
});

export default reduxForm({
  form: 'PaymentForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Payment),
);
