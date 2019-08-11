/* eslint-disable react/require-default-props */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

// Components
import BasicFormField from './BasicFormField';
import Validation from './Validation';

const Email = ({ narrow }) => (
  <Field
    type="email"
    name="email"
    placeholder="Email"
    border="2px solid black"
    component={BasicFormField}
    validate={[Validation.required, Validation.email]}
    narrow={narrow}
  />
);

const Phone = () => (
  <Field
    type="tel"
    name="phone"
    placeholder="Contact No."
    border="2px solid black"
    component={BasicFormField}
    validate={[Validation.required, Validation.maxLength11, Validation.number]}
  />
);

const Name = () => (
  <Fragment>
    <Field
      type="text"
      name="firstName"
      placeholder="First name"
      border="2px solid black"
      component={BasicFormField}
      validate={[Validation.required, Validation.maxLength20]}
      narrow
    />
    <Field
      type="text"
      name="lastName"
      placeholder="Last name"
      border="2px solid black"
      component={BasicFormField}
      validate={[Validation.required, Validation.maxLength20]}
      narrow
    />
  </Fragment>
);

const Address = ({ openPostCode }) => (
  <Fragment>
    <Field
      type="text"
      name="address"
      placeholder="Contact Address (Where your books arrive)"
      border="2px solid black"
      func={openPostCode}
      component={BasicFormField}
      validate={Validation.required}
    />
    <Field
      id="extra-address"
      type="text"
      name="extraAddress"
      placeholder="Extra Address (Where your books arrive)"
      border="2px solid black"
      component={BasicFormField}
      validate={Validation.required}
    />
  </Fragment>
);

const Password1 = ({ modify }) => (
  <Field
    type="password"
    name="password1"
    placeholder={`Password ${modify ? '' : '(With 8 characters or more)'}`}
    border="2px solid black"
    component={BasicFormField}
    validate={[Validation.required, Validation.minLength8]}
  />
);

const Password2 = () => (
  <Field
    type="password"
    name="password2"
    placeholder="Confirm password"
    border="2px solid black"
    component={BasicFormField}
    validate={[Validation.required, Validation.minLength8]}
  />
);

Email.propTypes = {
  narrow: PropTypes.bool,
};

Address.propTypes = {
  openPostCode: PropTypes.func.isRequired,
};

Password1.propTypes = {
  modify: PropTypes.bool,
};

export default {
  Email,
  Phone,
  Name,
  Address,
  Password1,
  Password2,
};
