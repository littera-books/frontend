import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { resetPassword } from '../../../reducers/reducer.user';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';

// Components
import Helmet from '../../helmet/Helmet';
import BasicFormField from '../../../form/FormField';
import Validation from '../../../form/Validation';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './ForgotPassword.styled';

class ForgetPassword extends React.Component {
  componentDidMount() {
    const { filter } = this.props;
    filter(VisibilityFilters.HIDE_TITLE);
  }

  componentWillUnmount() {
    const { filter } = this.props;
    filter(VisibilityFilters.SHOW_TITLE);
  }

  async onSubmit(payload) {
    const { reset } = this.props;
    await reset(payload.email);

    const { error, history } = this.props;
    if (!error) {
      history.replace('/main');
    }
  }

  render() {
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
  filter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  reset: email => dispatch(resetPassword(email)),
  filter: filter => dispatch(setVisibilityFilter(filter)),
});

export default reduxForm({
  form: 'ForgotPasswordForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ForgetPassword),
);
