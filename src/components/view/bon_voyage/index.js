import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listProduct } from '../../../reducers/reducer.product';
import { readToken } from '../../../reducers/reducer.user';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet';
import Product from './ServiceItem';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './styled';

class BonVoyage extends React.Component {
  componentDidMount() {
    const { getList } = this.props;
    getList();
  }

  render() {
    const { items, match, width } = this.props;

    if (width > 414) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet pageTitle={domainConfig.bonVoyage.title} path={match.url} />
          <Styled.ProductWrapper align="baseline">
            <Product width={width} items={items} />
          </Styled.ProductWrapper>
        </Wrapper.FlexWrapper>
      );
    }

    return (
      <Wrapper.CarouselGuardWrapper>
        <Wrapper.MobileBlockWrapper>
          <Helmet pageTitle={domainConfig.bonVoyage.title} path={match.url} />
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
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  width: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  items: state.product.items,
  userId: state.user.userId,
  width: state.controlWidth.width,
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(listProduct()),
  read: () => dispatch(readToken()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BonVoyage);
