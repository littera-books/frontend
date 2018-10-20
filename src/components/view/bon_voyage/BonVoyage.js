import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
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
import Styled from './BonVoyage.styled';

class BonVoyage extends React.Component {
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

  render() {
    const { width, popupFilter } = this.state;
    const {
      handleSubmit, userId, history, items,
    } = this.props;

    if (width > 414) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet pageTitle="Bon Voyage!" />
          <form
            action="post"
            onSubmit={handleSubmit(this.onPurchase.bind(this))}
          >
            <Wrapper.BasicFlexWrapper>
              <Loadable.Product width={width} items={items} />
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
        <Helmet pageTitle="Bon Voyage!" />
        <Styled.MarginForm
          action="post"
          onSubmit={handleSubmit(this.onPurchase.bind(this))}
        >
          <Loadable.Product width={width} items={items} />
          <Styled.AlignRightButton type="submit">
            Purchase
          </Styled.AlignRightButton>
        </Styled.MarginForm>
        {popupFilter && (
          <Loadable.FormPopup
            userId={userId}
            cancelPopup={this.cancelPopup}
            replace={history.replace}
            destination="/main"
          />
        )}
      </Wrapper.MobileBlockWrapper>
    );
  }
}

BonVoyage.propTypes = {
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
  )(BonVoyage),
);
