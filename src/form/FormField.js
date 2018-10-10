import React from 'react';

// Styled
import Element from '../styled_base/Element';

const BasicFormField = field => (
  <div>
    <Element.BasicInput type={field.type} {...field.input} required />
  </div>
);

const PlaceholderFormField = field => (
  <div>
    <Element.BasicInput
      type={field.type}
      placeholder={field.placeholder}
      {...field.input}
      required
    />
  </div>
);

export default {
  BasicFormField,
  PlaceholderFormField,
};
