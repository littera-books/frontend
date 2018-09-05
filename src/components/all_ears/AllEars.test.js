import React from 'react';
import ReactDOM from 'react-dom';
import AllEars from './AllEars';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllEars />, div);
  ReactDOM.unmountComponentAtNode(div);
});
