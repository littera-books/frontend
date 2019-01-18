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
  narrow,
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
      narrow={narrow}
      required
      disabled={disabled}
    />
    {touched && (error && <Element.BasicSmall>{error}</Element.BasicSmall>)}
  </div>
);

export const TextareaFormField = ({
  id,
  input,
  type,
  placeholder,
  meta: { touched, error },
  border,
  width,
}) => (
  <div>
    <Element.BasicTextarea
      id={id && id}
      type={type}
      placeholder={placeholder}
      {...input}
      style={{
        borderBottom: border,
        width,
      }}
    />
    {touched && (error && <Element.BasicSmall>{error}</Element.BasicSmall>)}
  </div>
);

export default BasicFormField;
