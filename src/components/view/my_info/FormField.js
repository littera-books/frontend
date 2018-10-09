import React from 'react';

// Styled
import Styled from './MyInfo.styled';

export const ResignFormField = field => (
  <div>
    <Styled.ManageInput
      type={field.type}
      placeholder={field.placeholder}
      {...field.input}
      required
    />
  </div>
);

const FormField = field => (
  <div>
    <Styled.ManageInput type={field.type} {...field.input} required />
  </div>
);

export default FormField;
