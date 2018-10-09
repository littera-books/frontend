import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { initialize, signIn } from '../../../reducers/reducer.auth';
import { setPopupHeaderMessage } from '../../../reducers/reducer.popup';
import dataConfig from '../../../dataConfig';

// Components
import Loadable from '../../../loadable';
import Helmet from '../../helmet/Helmet';
import FormField from '../FormField';

// Styled
import StyledBase from '../../../styled/Base';
import Styled from './SignIn.styled';

export class SignIn extends React.Component {
  state = {
    popupFilter: false,
  };

  componentDidMount() {
    const { init } = this.props;
    init();
  }

  async onSubmit(payload) {
    const { logIn } = this.props;
    await logIn(payload);

    const { error, setPopup } = this.props;
    if (!error) {
      setPopup(dataConfig.popupMessage.signIn);
      await this.setState({
        popupFilter: true,
      });
    }
  }

  render() {
    const { popupFilter } = this.state;
    const { handleSubmit, error, history } = this.props;

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
              name="email"
              label="Identification"
              component={FormField}
            />
            <Field
              type="password"
              name="password"
              label="Password"
              component={FormField}
            />
            <div>
              <StyledBase.Small>{error}</StyledBase.Small>
            </div>
            <Styled.SignInButton type="submit">
              <strong>SIGN IN</strong>
            </Styled.SignInButton>
          </Styled.FormWrapper>
          <Link to="/survey">Not a member yet?</Link>
          <p>Forgot your password?</p>
        </StyledBase.ColumnWrapper>
        {popupFilter ? (
          <Loadable.SimplePopup replace={history.replace} destination="/main" />
        ) : null}
      </StyledBase.FlexWrapper>
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
  setPopup: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  error: state.auth.error,
});

export const mapDispatchToProps = dispatch => ({
  init: () => dispatch(initialize()),
  logIn: payload => dispatch(signIn(payload)),
  setPopup: payload => dispatch(setPopupHeaderMessage(payload)),
});

export default reduxForm({
  form: 'SignInForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignIn),
);
