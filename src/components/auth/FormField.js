import React from 'react';
import Element from '../../styled_base/Element';

const FormField = field => (
  <div>
    <Element.BasicInput
      type={field.type}
      placeholder={field.label}
      {...field.input}
      required
    />
  </div>
);

export default FormField;
