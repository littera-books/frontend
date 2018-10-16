import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { listProduct } from '../../../reducers/reducer.product';
import { readToken } from '../../../reducers/reducer.user';
import {
  setPopupHeaderMessage,
  setPopupButtons,
} from '../../../reducers/reducer.popup';
import dataConfig from '../../../dataConfig';

// Components
import Loadable from '../../../loadable';
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './VonVoyage.styled';

const Product = ({ item }) => (
  <Styled.ProductItem>
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
);

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

class VonVoyage extends React.Component {
  // 창의 너비가 일정 수준 이하로 좁아지면 화면 구조를 캐러셀로 변화시킨다
  // EventListener 가 창의 너비를 실시간으로 읽어들인다
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      popupFilter: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.cancelPopup = this.cancelPopup.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    const { getList } = this.props;
    getList();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  onPurchase(payload) {
    if (!sessionStorage.getItem('token')) {
      const { history } = this.props;
      history.replace('/sign-in');
    }
    if (sessionStorage.getItem('token') && payload.product === 'promotion') {
      const { setPopup, setButtons, read } = this.props;
      setPopup(dataConfig.popupMessage.subscription);
      setButtons(dataConfig.popupMessage.subscriptionButtons);
      read();
      this.setState({ popupFilter: true });
    }
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  cancelPopup() {
    this.setState({ popupFilter: false });
  }

  renderItems() {
    const { items } = this.props;
    return _.map(items, item => <Product key={item.id} item={item} />);
  }

  render() {
    const { width, popupFilter } = this.state;
    const { handleSubmit, userId, history } = this.props;

    if (width > 414) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet pageTitle="Von Voyage!" />
          <form
            action="post"
            onSubmit={handleSubmit(this.onPurchase.bind(this))}
          >
            <Wrapper.BasicFlexWrapper>
              {this.renderItems()}
              <Promotion />
            </Wrapper.BasicFlexWrapper>
            <Styled.AlignRightButton type="submit">
              Purchase
            </Styled.AlignRightButton>
          </form>
          {popupFilter && (
            <Loadable.FormPopup
              userId={userId}
              cancelPopup={this.cancelPopup}
              replace={history.replace}
              destination="/main"
            />
          )}
        </Wrapper.FlexWrapper>
      );
    }

    return (
      <Wrapper.MobileBlockWrapper>
        <Helmet pageTitle="Von Voyage!" />
        <form action="post" onSubmit={handleSubmit(this.onPurchase.bind(this))}>
          {this.renderItems()}
          <Promotion />
          <Styled.FixedButton type="submit">Purchase</Styled.FixedButton>
        </form>
      </Wrapper.MobileBlockWrapper>
    );
  }
}

Product.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
};

VonVoyage.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  userId: PropTypes.number.isRequired,
  read: PropTypes.func.isRequired,
  getList: PropTypes.func.isRequired,
  setPopup: PropTypes.func.isRequired,
  setButtons: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.product.items,
  userId: state.user.userId,
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(listProduct()),
  read: () => dispatch(readToken()),
  setPopup: payload => dispatch(setPopupHeaderMessage(payload)),
  setButtons: payload => dispatch(setPopupButtons(payload)),
});

export default reduxForm({
  form: 'PurchaseForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(VonVoyage),
);
