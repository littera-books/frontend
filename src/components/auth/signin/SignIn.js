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
import BasicFormField from '../../../form/FormField';
import Validation from '../../../form/Validation';
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
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
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="SignIn" />
        <Wrapper.ColumnWrapper>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              type="email"
              name="email"
              placeholder="Identification"
              component={BasicFormField.PlaceholderFormField}
              validate={[Validation.required, Validation.email]}
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              component={BasicFormField.PlaceholderFormField}
              validate={Validation.required}
            />
            <div>
              <Element.BasicSmall>{error}</Element.BasicSmall>
            </div>
            <Styled.SignInButton id="submit" type="submit">
              SIGN IN
            </Styled.SignInButton>
          </form>
          <Link to="/survey" style={{ fontSize: '0.5rem' }}>
            Not a member yet?
          </Link>
          <Link to="/forgot-password" style={{ fontSize: '0.5rem' }}>
            Forgot your password?
          </Link>
        </Wrapper.ColumnWrapper>
        {popupFilter ? (
          <Loadable.SimplePopup replace={history.replace} destination="/main" />
        ) : null}
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
