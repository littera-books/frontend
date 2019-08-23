import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { initialize, signIn } from '../../../../reducers/reducer.auth';
import domainConfig from '../../../../config/domainConfig';

// Components
import FormField from '../../../../form/FormField';
import Helmet from '../../../helmet';

// Styled
import Wrapper from '../../../../styled_base/Wrapper';
import Element from '../../../../styled_base/Element';

export class SignIn extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  async onSubmit(payload) {
    const { logIn } = this.props;
    await logIn(payload);

    const { error, history } = this.props;
    if (!error) {
      history.replace(domainConfig.main.path);
    }
  }

  render() {
    const { handleSubmit, error, match } = this.props;

    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.signIn.title} path={match.url} />
        <Wrapper.BasicBlockWrapper>
          <Element.BasicTitle align="center" size="3rem">
            Login
          </Element.BasicTitle>
          <p style={{ textAlign: 'center' }}>
            <span>Not a member yet?&nbsp;&nbsp;</span>
            <Link to={domainConfig.signUp.path} style={{ color: 'blue' }}>
              Sign up
            </Link>
          </p>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <FormField.SignInField error={error} />
            <Link
              to={domainConfig.forgotPassword.path}
              style={{
                display: 'block',
                textAlign: 'right',
                marginTop: '1rem',
              }}
            >
              Forgot password?
            </Link>
            <Element.SubmitButton id="submit" type="submit">
              Enter
            </Element.SubmitButton>
          </form>
        </Wrapper.BasicBlockWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  init: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export const mapStateToProps = state => ({
  error: state.auth.error,
});

export const mapDispatchToProps = dispatch => ({
  init: () => dispatch(initialize()),
  logIn: payload => dispatch(signIn(payload)),
});

export default reduxForm({
  form: 'SignInForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignIn),
);
