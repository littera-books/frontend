import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

// Components
import BasicFormField from './BasicFormField';
import Validation from './Validation';

// Styled
import Wrapper from '../styled_base/Wrapper';
import Element from '../styled_base/Element';

const NameWrapper = styled(Wrapper.BetweenWrapper)`
  width: 20rem;
  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

const EmailField = ({ error }) => (
  <Fragment>
    <Field
      type="email"
      name="email"
      placeholder="E-mail address (your identification)"
      border="1px solid black"
      width="20rem"
      component={BasicFormField}
      validate={[Validation.required, Validation.email]}
    />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
  </Fragment>
);

const PasswordField = () => (
  <Fragment>
    <Field
      type="password"
      name="password1"
      placeholder="Password (With 8 characters or more)"
      border="1px solid black"
      width="20rem"
      component={BasicFormField}
      validate={[Validation.required, Validation.minLength8]}
    />
    <Field
      type="password"
      name="password2"
      placeholder="Confirm password"
      border="1px solid black"
      width="20rem"
      component={BasicFormField}
      validate={[Validation.required, Validation.minLength8]}
    />
  </Fragment>
);

const InfoFormField = ({ openPostCode, error }) => (
  <Fragment>
    <Field
      type="email"
      name="email"
      placeholder="E-mail address (your identification)"
      border="1px solid black"
      width="20rem"
      component={BasicFormField}
      validate={[Validation.required, Validation.email]}
      disabled
    />
    <NameWrapper>
      <Field
        type="text"
        name="firstName"
        placeholder="first name"
        border="1px solid black"
        width="9.5rem"
        component={BasicFormField}
        validate={[Validation.required, Validation.maxLength20]}
      />
      <Field
        type="text"
        name="lastName"
        placeholder="last name"
        border="1px solid black"
        width="9.5rem"
        component={BasicFormField}
      />
    </NameWrapper>
    <Field
      type="tel"
      name="phone"
      placeholder="Contact No."
      border="1px solid black"
      width="20rem"
      component={BasicFormField}
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
      border="1px solid black"
      width="20rem"
      func={openPostCode}
      component={BasicFormField}
      validate={Validation.required}
    />
    <Field
      id="extra-address"
      type="text"
      name="extraAddress"
      placeholder="Extra Address (Where your books arrive)"
      border="1px solid black"
      width="20rem"
      component={BasicFormField}
      validate={Validation.required}
    />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
  </Fragment>
);

const PaymentFormField = ({ openPostCode, error, children }) => (
  <Fragment>
    <NameWrapper>
      <Field
        type="text"
        name="firstName"
        placeholder="first name"
        border="1px solid black"
        width="9.5rem"
        component={BasicFormField}
        validate={[Validation.required, Validation.maxLength20]}
      />
      <Field
        type="text"
        name="lastName"
        placeholder="last name"
        border="1px solid black"
        width="9.5rem"
        component={BasicFormField}
      />
    </NameWrapper>
    <Field
      type="tel"
      name="phone"
      placeholder="Contact No."
      border="1px solid black"
      width="20rem"
      component={BasicFormField}
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
      border="1px solid black"
      width="20rem"
      func={openPostCode}
      component={BasicFormField}
      validate={Validation.required}
    />
    <Field
      id="extra-address"
      type="text"
      name="extraAddress"
      placeholder="Extra Address (Where your books arrive)"
      border="1px solid black"
      width="20rem"
      component={BasicFormField}
      validate={Validation.required}
    />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
    {children && children}
  </Fragment>
);

InfoFormField.propTypes = {
  openPostCode: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

EmailField.propTypes = {
  error: PropTypes.string.isRequired,
};

PaymentFormField.propTypes = {
  openPostCode: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.element,
};

export default {
  EmailField,
  PasswordField,
  InfoFormField,
  PaymentFormField,
};
