import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listProduct } from '../../../reducers/reducer.product';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import StyledBase from '../../../styled/Base';

class VonVoyage extends React.Component {
  componentDidMount() {
    const { getList } = this.props;
    getList();
  }

  renderItems() {
    const { items } = this.props;
    return _.map(items, item => (
      <div key={item.id}>
        <p>1 book</p>
        <p>X</p>
        <p>1 month</p>
        <p>X</p>
        <p>{`${item.months} months`}</p>
        <p>X</p>
        <p>{`${item.price} KRW`}</p>
      </div>
    ));
  }

  render() {
    return (
      <StyledBase.FlexWrapper>
        <Helmet pageTitle="Von Voyage!" />
        {this.renderItems()}
        <div>
          <p>promotion</p>
        </div>
      </StyledBase.FlexWrapper>
    );
  }
}

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
