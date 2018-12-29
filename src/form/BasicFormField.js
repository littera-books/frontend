import React from 'react';

// Styled
import Element from '../styled_base/Element';

const BasicFormField = ({
  id,
  input,
  type,
  placeholder,
  func,
  meta: { touched, error },
  border,
  width,
  disabled,
}) => (
  <div>
    <Element.BasicInput
      id={id && id}
      type={type}
      placeholder={placeholder}
      {...input}
      onClick={() => func && func()}
      border={border}
      width={width}
      required
      disabled={disabled}
    />
    {touched && (error && <Element.BasicSmall>{error}</Element.BasicSmall>)}
  </div>
);

export default BasicFormField;
