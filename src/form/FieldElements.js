import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

// Components
import BasicFormField from './BasicFormField';
import Validation from './Validation';

const Email = () => (
  <Field
    type="email"
    name="email"
    placeholder="Email"
    border="1px solid black"
    width="18rem"
    component={BasicFormField}
    validate={[Validation.required, Validation.email]}
  />
);

const Phone = () => (
  <Field
    type="tel"
    name="phone"
    placeholder="Contact No."
    border="1px solid black"
    width="18rem"
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
  </Fragment>
);

const Address = ({ openPostCode }) => (
  <Fragment>
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
  </Fragment>
);

const Password1 = () => (
  <Field
    type="password"
    name="password1"
    placeholder="Password (With 8 characters or more)"
    border="1px solid black"
    width="18rem"
    component={BasicFormField}
    validate={[Validation.required, Validation.minLength8]}
  />
);

const Password2 = () => (
  <Field
    type="password"
    name="password2"
    placeholder="Confirm password"
    border="1px solid black"
    width="18rem"
    component={BasicFormField}
    validate={[Validation.required, Validation.minLength8]}
  />
);

Address.propTypes = {
  openPostCode: PropTypes.func.isRequired,
};

export default {
  Email,
  Phone,
  Name,
  Address,
  Password1,
  Password2,
};
