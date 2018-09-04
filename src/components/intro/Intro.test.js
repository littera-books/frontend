import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Intro from './Intro';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Intro />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
