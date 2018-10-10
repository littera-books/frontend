import React from 'react';
import Styled from './Survey.styled';

const LongPlaceholderFormField = field => (
  <div>
    <Styled.LongInput
      type={field.type}
      placeholder={field.placeholder}
      {...field.input}
      required
    />
  </div>
);

export default {
  LongPlaceholderFormField,
};
