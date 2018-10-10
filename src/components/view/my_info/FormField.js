import React from 'react';

// Styled
import Element from '../../../styled_base/Element';

export const ResignFormField = field => (
  <div>
    <Element.BasicInput
      type={field.type}
      placeholder={field.placeholder}
      {...field.input}
      required
    />
  </div>
);

const FormField = field => (
  <div>
    <Element.BasicInput type={field.type} {...field.input} required />
  </div>
);

export default FormField;
