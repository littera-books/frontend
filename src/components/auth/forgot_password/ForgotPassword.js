import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { resetPassword } from '../../../reducers/reducer.user';

// Components
import Helmet from '../../helmet/Helmet';
import FormField from '../../../form/FormField';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './ForgotPassword.styled';

class ForgetPassword extends React.Component {
  async onSubmit(payload) {
    const { reset } = this.props;
    await reset(payload.email);

    const { error, history } = this.props;
    if (!error) {
      history.replace('/reset-password');
    }
  }

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Forgot Password" />
        <Styled.LineHeightForm
          action="post"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <FormField.EmailField error={error} />
          <Element.SubmitButton type="submit">
            Reset Password
          </Element.SubmitButton>
        </Styled.LineHeightForm>
      </Wrapper.FlexWrapper>
    );
  }
}

ForgetPassword.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  reset: email => dispatch(resetPassword(email)),
});

export default reduxForm({
  form: 'ForgotPasswordForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ForgetPassword),
);
