import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { initialize, signIn } from '../../../reducers/reducer.auth';

// Components
import BasicFormField from '../../../form/BasicFormField';
import Validation from '../../../form/Validation';
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

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
      history.replace('/main');
    }
  }

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="SignIn" />
        <Wrapper.BasicBlockWrapper>
          <Element.BasicTitle
            align="center"
            size="3rem"
            fontFamily="'Gothic A1', sans-serif"
          >
            Log in
          </Element.BasicTitle>
          <p style={{ textAlign: 'center' }}>
            <span>New To This Site?&nbsp;&nbsp;</span>
            <Link to="/add-info" style={{ color: 'blue' }}>
              Sign up
            </Link>
          </p>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              border="1px solid black"
              width="20rem"
              component={BasicFormField}
              validate={[Validation.required, Validation.email]}
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              border="1px solid black"
              width="20rem"
              component={BasicFormField}
              validate={Validation.required}
            />
            <div>
              <Element.BasicSmall>{error}</Element.BasicSmall>
            </div>
            <Link
              to="/forgot-password"
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
