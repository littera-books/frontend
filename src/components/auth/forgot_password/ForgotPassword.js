import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Components
import Helmet from '../../helmet/Helmet';
import BasicFormField from '../../../form/FormField';
import Validation from '../../../form/Validation';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './ForgotPassword.styled';

const ForgetPassword = ({ history }) => (
  <Wrapper.FlexWrapper>
    <Helmet pageTitle="Forgot Password" />
    <Styled.LineHeightForm action="post">
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
        <Element.BasicButton type="submit">Reset Password</Element.BasicButton>
      </Styled.ButtonGroup>
    </Styled.LineHeightForm>
  </Wrapper.FlexWrapper>
);

ForgetPassword.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default reduxForm({
  form: 'ForgotPasswordForm',
})(ForgetPassword);
