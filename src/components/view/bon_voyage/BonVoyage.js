import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listProduct } from '../../../reducers/reducer.product';
import { readToken } from '../../../reducers/reducer.user';

// Components
import Helmet from '../../helmet/Helmet';
import Product from './Product';

// Styled
import Wrapper from '../../../styled_base/Wrapper';

class BonVoyage extends React.Component {
  // 창의 너비가 일정 수준 이하로 좁아지면 화면 구조를 캐러셀로 변화시킨다
  // EventListener 가 창의 너비를 실시간으로 읽어들인다
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
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

  render() {
    const { width } = this.state;
    const { items } = this.props;

    if (width > 414) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet pageTitle="Bon Voyage!" />
          <Wrapper.BasicFlexWrapper>
            <Product width={width} items={items} />
          </Wrapper.BasicFlexWrapper>
        </Wrapper.FlexWrapper>
      );
    }

    return (
      <Wrapper.CarouselGuardWrapper>
        <Wrapper.MobileBlockWrapper>
          <Helmet pageTitle="Bon Voyage!" />
          <Product width={width} items={items} />
        </Wrapper.MobileBlockWrapper>
      </Wrapper.CarouselGuardWrapper>
    );
  }
}

BonVoyage.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.product.items,
  userId: state.user.userId,
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(listProduct()),
  read: () => dispatch(readToken()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BonVoyage);
