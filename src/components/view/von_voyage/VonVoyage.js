import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { listProduct } from '../../../reducers/reducer.product';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import StyledBase from '../../../styled_base/Base';
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
    this.state = { width: window.innerWidth };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
    console.log(payload);
    console.log(this);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  renderItems() {
    const { items } = this.props;
    return _.map(items, item => <Product key={item.id} item={item} />);
  }

  render() {
    const { width } = this.state;
    const { handleSubmit } = this.props;

    if (width > 414) {
      return (
        <StyledBase.FlexWrapper>
          <Helmet pageTitle="Von Voyage!" />
          <Styled.ColumnForm
            action="post"
            onSubmit={handleSubmit(this.onPurchase.bind(this))}
          >
            <Styled.ItemWrapper>
              {this.renderItems()}
              <Promotion />
            </Styled.ItemWrapper>
            <Styled.AlignRightButton type="submit">
              Purchase
            </Styled.AlignRightButton>
          </Styled.ColumnForm>
        </StyledBase.FlexWrapper>
      );
    }

    return (
      <StyledBase.FlexWrapper>
        <Helmet pageTitle="Von Voyage!" />
        <Styled.ColumnForm
          action="post"
          onSubmit={handleSubmit(this.onPurchase.bind(this))}
        >
          {this.renderItems()}
          <Promotion />
          <Styled.FixedButton type="submit">Purchase</Styled.FixedButton>
        </Styled.ColumnForm>
      </StyledBase.FlexWrapper>
    );
  }
}

Product.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
};

VonVoyage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.product.items,
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(listProduct()),
});

export default reduxForm({
  form: 'PurchaseForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(VonVoyage),
);
