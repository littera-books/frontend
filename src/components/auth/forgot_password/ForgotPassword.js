import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { resetPassword } from '../../../reducers/reducer.user';
import { setPopupHeaderMessage } from '../../../reducers/reducer.popup';
import dataConfig from '../../../dataConfig';

// Components
import Loadable from '../../../loadable';
import Helmet from '../../helmet/Helmet';
import BasicFormField from '../../../form/FormField';
import Validation from '../../../form/Validation';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './ForgotPassword.styled';

class ForgetPassword extends React.Component {
  state = {
    popupFilter: false,
  };

  async onSubmit(payload) {
    const { reset } = this.props;
    await reset(payload.email);

    const { error, setPopup } = this.props;
    if (!error) {
      setPopup(dataConfig.popupMessage.resetPassword);
      this.setState({ popupFilter: true });
    }
  }

  render() {
    const { popupFilter } = this.state;
    const { handleSubmit, history } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Forgot Password" />
        <Styled.LineHeightForm
          action="post"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Field
            type="email"
            name="email"
            placeholder="E-mail address (your identification)"
            component={BasicFormField.LongPlaceholderFormField}
            validate={[Validation.required, Validation.email]}
          />
          <Styled.ButtonGroup>
            <Element.BasicButton type="button" onClick={history.goBack}>
              ←
            </Element.BasicButton>
            <Element.BasicButton type="submit">
              Reset Password
            </Element.BasicButton>
          </Styled.ButtonGroup>
        </Styled.LineHeightForm>
        {popupFilter && (
          <Loadable.SimplePopup replace={history.replace} destination="/main" />
        )}
      </Wrapper.FlexWrapper>
    );
  }
}

ForgetPassword.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  setPopup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  reset: email => dispatch(resetPassword(email)),
  setPopup: payload => dispatch(setPopupHeaderMessage(payload)),
});

export default reduxForm({
  form: 'ForgotPasswordForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ForgetPassword),
);
