import React from 'react';

// Styled
import Element from '../styled_base/Element';

const BasicFormField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <Element.BasicInput id="code" type={type} {...input} required />
    {touched && (error && <Element.BasicSmall>{error}</Element.BasicSmall>)}
  </div>
);

const PlaceholderFormField = ({
  input,
  type,
  placeholder,
  meta: { touched, error },
  border,
  width,
  disabled,
}) => (
  <div>
    <Element.BasicInput
      type={type}
      placeholder={placeholder}
      {...input}
      border={border}
      width={width}
      required
      disabled={disabled}
    />
    {touched && (error && <Element.BasicSmall>{error}</Element.BasicSmall>)}
  </div>
);

const PostalCodeFormField = ({
  input,
  type,
  placeholder,
  func,
  meta: { touched, error },
  border,
  width,
}) => (
  <div>
    <Element.LongInput
      type={type}
      placeholder={placeholder}
      {...input}
      onClick={() => func()}
      border={border}
      width={width}
      required
    />
    {touched && (error && <Element.BasicSmall>{error}</Element.BasicSmall>)}
  </div>
);

const AcceptProvisionFormField = ({
  id, label, input, type,
}) => (
  <label htmlFor={id}>
    <span style={{ marginRight: '1rem' }}>{label}</span>
    <Element.BasicInput id={id} type={type} {...input} required />
  </label>
);

export default {
  BasicFormField,
  PlaceholderFormField,
  PostalCodeFormField,
  AcceptProvisionFormField,
};
