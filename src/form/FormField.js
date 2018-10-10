import React from 'react';

// Styled
import Element from '../styled_base/Element';

const BasicFormField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <Element.BasicInput type={type} {...input} required />
    {touched && (error && <Element.BasicSmall>{error}</Element.BasicSmall>)}
  </div>
);

const PlaceholderFormField = ({
  input,
  type,
  placeholder,
  meta: { touched, error },
}) => (
  <div>
    <Element.BasicInput
      type={type}
      placeholder={placeholder}
      {...input}
      required
    />
    {touched && (error && <Element.BasicSmall>{error}</Element.BasicSmall>)}
  </div>
);

export default {
  BasicFormField,
  PlaceholderFormField,
};
