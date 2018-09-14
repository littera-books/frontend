import React from 'react';

const FormField = field => (
  <div>
    <input
      type={field.type}
      placeholder={field.label}
      {...field.input}
      required
    />
  </div>
);

export default FormField;
