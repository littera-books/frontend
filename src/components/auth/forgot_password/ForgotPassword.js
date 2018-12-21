import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { resetPassword } from '../../../reducers/reducer.user';

// Components
import Helmet from '../../helmet/Helmet';
import BasicFormField from '../../../form/FormField';
import Validation from '../../../form/Validation';

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
      history.replace('/main');
    }
  }

  render() {
    const { handleSubmit } = this.props;
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
            border="1px solid black"
            width="20rem"
            component={BasicFormField.PlaceholderFormField}
            validate={[Validation.required, Validation.email]}
          />
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
