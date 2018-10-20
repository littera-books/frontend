import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

// Components
import BasicFormField from './FormField';
import Validation from './Validation';

// Styled
import Wrapper from '../styled_base/Wrapper';
import Element from '../styled_base/Element';

const NameWrapper = styled(Wrapper.BetweenWrapper)`
  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

export const PasswordField = () => (
  <Fragment>
    <Field
      type="password"
      name="password1"
      placeholder="Password (With 8 characters or more)"
      component={BasicFormField.LongPlaceholderFormField}
      validate={[Validation.required, Validation.minLength8]}
    />
    <Field
      type="password"
      name="password2"
      placeholder="Confirm password"
      component={BasicFormField.LongPlaceholderFormField}
      validate={[Validation.required, Validation.minLength8]}
    />
  </Fragment>
);

const InfoFormField = ({ openPostCode, error }) => (
  <Fragment>
    <NameWrapper>
      <Field
        type="text"
        name="firstName"
        placeholder="first name"
        component={BasicFormField.PlaceholderFormField}
        validate={[Validation.required, Validation.maxLength20]}
      />
      <Field
        type="text"
        name="lastName"
        placeholder="last name"
        component={BasicFormField.PlaceholderFormField}
      />
    </NameWrapper>
    <Field
      type="email"
      name="email"
      placeholder="E-mail address (your identification)"
      component={BasicFormField.LongPlaceholderFormField}
      validate={[Validation.required, Validation.email]}
    />
    <Field
      type="tel"
      name="phone"
      placeholder="Contact No."
      component={BasicFormField.LongPlaceholderFormField}
      validate={[
        Validation.required,
        Validation.maxLength11,
        Validation.number,
      ]}
    />
    <Field
      type="text"
      name="address"
      placeholder="Contact Address (Where your books arrive)"
      func={openPostCode}
      component={BasicFormField.PostalCodeFormField}
      validate={Validation.required}
    />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
  </Fragment>
);

InfoFormField.propTypes = {
  openPostCode: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default InfoFormField;
