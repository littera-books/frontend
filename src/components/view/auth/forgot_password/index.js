import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { resetPassword } from '../../../../reducers/reducer.user';
import domainConfig from '../../../../config/domainConfig';

// Components
import Helmet from '../../../helmet';
import FormField from '../../../../form/FormField';

// Styled
import Wrapper from '../../../../styled_base/Wrapper';
import Element from '../../../../styled_base/Element';

class ForgetPassword extends React.Component {
  async onSubmit(payload) {
    const { reset } = this.props;
    await reset(payload.email);

    const { error, history } = this.props;
    if (!error) {
      history.replace(domainConfig.resetPassword.path);
    }
  }

  render() {
    const { handleSubmit, error, match } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet
          pageTitle={domainConfig.forgotPassword.title}
          path={match.url}
        />
        <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <FormField.EmailField error={error} />
          <Element.SubmitButton type="submit">
            Reset Password
          </Element.SubmitButton>
        </form>
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
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
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
