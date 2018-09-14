import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { initialize, signIn } from '../../../reducers/reducer.auth';

// Components
import Helmet from '../../helmet/Helmet';
import FormField from '../FormField';

// Styled
import StyledBase from '../../../styled/Base';
import Styled from './SignIn.styled';

export class SignIn extends React.Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    const { init } = this.props;
    init();
  }

  async onSubmit(payload) {
    const { logIn } = this.props;
    await logIn(payload);

    const { error } = this.props;
    if (!error) {
      await this.setState({
        redirect: true,
      });
    }
  }

  render() {
    const { redirect } = this.state;
    const { handleSubmit, error } = this.props;

    if (redirect) {
      return <Redirect to="/main" />;
    }

    return (
      <StyledBase.FlexWrapper>
        <Helmet pageTitle="SignIn" />
        <StyledBase.ColumnWrapper>
          <Styled.FormWrapper
            action="post"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            <Field
              type="text"
              name="username"
              label="IDENTIFICATION _"
              component={FormField}
            />
            <Field
              type="password"
              name="password"
              label="PASSWORD _"
              component={FormField}
            />
            <div>
              <small>{error}</small>
            </div>
            <button type="submit">Sign In</button>
          </Styled.FormWrapper>
          <p>Not a member yet?</p>
          <p>Forgot your password?</p>
        </StyledBase.ColumnWrapper>
      </StyledBase.FlexWrapper>
    );
  }
}

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  init: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
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
