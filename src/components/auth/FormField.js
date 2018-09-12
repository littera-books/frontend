import React from 'react';

const FormField = field => (
  <div>
    <input type={field.type} placeholder={field.label} {...field.input} />
  </div>
);

export default FormField;
