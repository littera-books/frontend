import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { listProduct } from '../../../reducers/reducer.product';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import StyledBase from '../../../styled/Base';
import Styled from './VonVoyage.styled';

const Product = ({ item }) => (
  <Styled.ProductItem>
    <p>1 book</p>
    <p>X</p>
    <p>1 month</p>
    <p>X</p>
    <p>{`${item.months} months`}</p>
    <p>X</p>
    <p>{`${item.price} KRW`}</p>
  </Styled.ProductItem>
);

const Promotion = () => (
  <Styled.ProductItem>
    <p>promotion</p>
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

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  renderItems() {
    const { items } = this.props;
    return _.map(items, item => <Product key={item.id} item={item} />);
  }

  render() {
    const { width } = this.state;
    console.log(width);
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
        <StyledBase.FlexWrapper>
          <Helmet pageTitle="Von Voyage!" />
          {this.renderItems()}
          <Promotion />
        </StyledBase.FlexWrapper>
      );
    }

    return (
      <Styled.SliderWrapper>
        <Helmet pageTitle="Von Voyage!" />
        <Slider {...settings}>
          {this.renderItems()}
          <Promotion />
        </Slider>
      </Styled.SliderWrapper>
    );
  }
}

Product.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
};

VonVoyage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.product.items,
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(listProduct()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VonVoyage);
