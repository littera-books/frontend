import React from 'react';

// Styled
import Styled from './MyInfo.styled';

const FormField = field => (
  <div>
    <Styled.ManageInput type={field.type} {...field.input} required />
  </div>
);

export default FormField;
