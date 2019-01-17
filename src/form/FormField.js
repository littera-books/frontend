import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';
import dataConfig from '../config/dataConfig';

// Components
import BasicFormField, { TextareaFormField } from './BasicFormField';
import Validation from './Validation';

// Styled
import Wrapper from '../styled_base/Wrapper';
import Element from '../styled_base/Element';

const NameWrapper = styled(Wrapper.BetweenWrapper)`
  width: 18rem;
`;

const EmailField = ({ error }) => (
  <Fragment>
    <Field
      type="email"
      name="email"
      placeholder="Email"
      border="1px solid black"
      width="18rem"
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
      width="18rem"
      component={BasicFormField}
      validate={[Validation.required, Validation.minLength8]}
    />
    <Field
      type="password"
      name="password2"
      placeholder="Confirm password"
      border="1px solid black"
      width="18rem"
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
      placeholder="Email"
      border="1px solid black"
      width="18rem"
      component={BasicFormField}
      validate={[Validation.required, Validation.email]}
      disabled
    />
    <NameWrapper>
      <Field
        type="text"
        name="firstName"
        placeholder="First name"
        border="1px solid black"
        width="8.5rem"
        component={BasicFormField}
        validate={[Validation.required, Validation.maxLength20]}
      />
      <Field
        type="text"
        name="lastName"
        placeholder="Last name"
        border="1px solid black"
        width="8.5rem"
        component={BasicFormField}
      />
    </NameWrapper>
    <Field
      type="tel"
      name="phone"
      placeholder="Contact No."
      border="1px solid black"
      width="18rem"
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
      width="18rem"
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
      width="18rem"
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
        placeholder="First name"
        border="1px solid black"
        width="8.5rem"
        component={BasicFormField}
        validate={[Validation.required, Validation.maxLength20]}
      />
      <Field
        type="text"
        name="lastName"
        placeholder="Last name"
        border="1px solid black"
        width="8.5rem"
        component={BasicFormField}
      />
    </NameWrapper>
    <Field
      type="tel"
      name="phone"
      placeholder="Contact No."
      border="1px solid black"
      width="18rem"
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
      width="18rem"
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
      width="18rem"
      component={BasicFormField}
      validate={Validation.required}
    />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
    {children && children}
  </Fragment>
);

const SendEmailFormField = ({ error }) => (
  <Fragment>
    <NameWrapper>
      <Field
        type="email"
        name="email"
        placeholder="Email"
        border="1px solid black"
        width="8.5rem"
        component={BasicFormField}
        validate={[Validation.required, Validation.email]}
      />
      <Field
        type="text"
        name="name"
        placeholder="Name"
        border="1px solid black"
        width="8.5rem"
        component={BasicFormField}
        validate={[Validation.required, Validation.maxLength20]}
      />
    </NameWrapper>
    <Field
      type="text"
      name="content"
      placeholder={dataConfig.placeholderText}
      border="1px solid black"
      width="18rem"
      component={TextareaFormField}
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

EmailField.propTypes = {
  error: PropTypes.string.isRequired,
};

PaymentFormField.propTypes = {
  openPostCode: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.element,
};

SendEmailFormField.propTypes = {
  error: PropTypes.string.isRequired,
};

export default {
  EmailField,
  PasswordField,
  InfoFormField,
  PaymentFormField,
  SendEmailFormField,
};
