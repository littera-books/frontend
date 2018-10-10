import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { destroyUser, clearError } from '../../../reducers/reducer.user';
import {
  setPopupHeaderMessage,
  setPopupButtons,
} from '../../../reducers/reducer.popup';
import dataConfig from '../../../dataConfig';

// Components
import Loadable from '../../../loadable';
import Helmet from '../../helmet/Helmet';
import { ResignFormField } from './FormField';

// Styled
import StyledBase from '../../../styled_base/Wrapper';
import Styled from './MyInfo.styled';

class Resign extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popupFilter: false,
      payload: {},
    };

    this.cancelPopup = this.cancelPopup.bind(this);
  }

  componentDidMount() {
    const { initialize, userId } = this.props;
    initialize({
      userId,
    });
  }

  onDestroy(payload) {
    const { setPopup, setButtons } = this.props;
    setPopup(dataConfig.popupMessage.resign);
    setButtons(dataConfig.popupMessage.resignButtons);
    this.setState({
      popupFilter: true,
      payload,
    });
  }

  cancelPopup() {
    this.setState({ popupFilter: false });
    const { clear } = this.props;
    clear();
  }

  render() {
    const { popupFilter, payload } = this.state;
    const {
      handleSubmit, history, destroy, error,
    } = this.props;

    return (
      <StyledBase.FlexWrapper>
        <Helmet pageTitle="Resign" />
        <form action="post" onSubmit={handleSubmit(this.onDestroy.bind(this))}>
          <Field
            type="password"
            name="password"
            placeholder="Write your password..."
            component={ResignFormField}
          />
          <Styled.AlignRightButton type="submit">
            Resign
          </Styled.AlignRightButton>
        </form>
        {popupFilter ? (
          <Loadable.ConfirmPopup
            method={destroy}
            argument={payload}
            error={error}
            cancelPopup={this.cancelPopup}
            replace={history.replace}
            destination="/my-info/resign/survey"
          />
        ) : null}
      </StyledBase.FlexWrapper>
    );
  }
}

Resign.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  initialize: PropTypes.func.isRequired,
  setPopup: PropTypes.func.isRequired,
  setButtons: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  setPopup: payload => dispatch(setPopupHeaderMessage(payload)),
  setButtons: payload => dispatch(setPopupButtons(payload)),
  destroy: payload => dispatch(destroyUser(payload)),
  clear: () => dispatch(clearError()),
});

export default reduxForm({
  form: 'ResignForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Resign),
);
