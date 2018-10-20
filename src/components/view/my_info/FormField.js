import React from 'react';
import Styled from '../join/Survey.styled';
import Element from '../../../styled_base/Element';

const LongPlaceholderFormField = ({
  input,
  type,
  placeholder,
  meta: { touched, error },
}) => (
  <div>
    <Styled.LongInput
      type={type}
      placeholder={placeholder}
      {...input}
      required
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
}) => (
  <div>
    <Styled.LongInput
      type={type}
      placeholder={placeholder}
      {...input}
      onClick={() => func()}
      required
    />
    {touched && (error && <Element.BasicSmall>{error}</Element.BasicSmall>)}
  </div>
);

export default {
  LongPlaceholderFormField,
  PostalCodeFormField,
};
