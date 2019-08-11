import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';
import dataConfig from '../config/dataConfig';

// Components
import BasicFormField, { TextareaFormField } from './BasicFormField';
import Validation from './Validation';
import FieldElements from './FieldElements';

// Styled
import Wrapper from '../styled_base/Wrapper';
import Element from '../styled_base/Element';

const NameWrapper = styled(Wrapper.BetweenWrapper)`
  width: 20rem;

  @media (max-width: 414px) {
    width: 18rem;
  }
`;

const EmailField = ({ error }) => (
  <Fragment>
    <FieldElements.Email />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
  </Fragment>
);

const ResignField = ({ error }) => (
  <Fragment>
    <FieldElements.Password1 modify />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
  </Fragment>
);

const SignInField = ({ error }) => (
  <Fragment>
    <FieldElements.Email />
    <FieldElements.Password1 modify />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
  </Fragment>
);

const PasswordField = () => (
  <Fragment>
    <FieldElements.Password1 />
    <FieldElements.Password2 />
  </Fragment>
);

const InfoFormField = ({ openPostCode, error }) => (
  <Fragment>
    <FieldElements.Email />
    <NameWrapper>
      <FieldElements.Name />
    </NameWrapper>
    <FieldElements.Phone />
    <FieldElements.Address openPostCode={openPostCode} />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
  </Fragment>
);

const PaymentFormField = ({ openPostCode, error, children }) => (
  <Fragment>
    <NameWrapper>
      <FieldElements.Name />
    </NameWrapper>
    <FieldElements.Phone />
    <FieldElements.Address openPostCode={openPostCode} />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
    {children && children}
  </Fragment>
);

const SendEmailFormField = ({ error }) => (
  <Fragment>
    <NameWrapper>
      <FieldElements.Email narrow />
      <Field
        type="text"
        name="name"
        placeholder="Name"
        border="2px solid black"
        component={BasicFormField}
        validate={[Validation.required, Validation.maxLength20]}
        narrow
      />
    </NameWrapper>
    <Field
      type="text"
      name="content"
      placeholder={dataConfig.placeholderText}
      border="2px solid black"
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

SignInField.propTypes = {
  error: PropTypes.string.isRequired,
};

ResignField.propTypes = {
  error: PropTypes.string.isRequired,
};

export default {
  EmailField,
  ResignField,
  SignInField,
  PasswordField,
  InfoFormField,
  PaymentFormField,
  SendEmailFormField,
};
