import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { VisibilityFilters } from '../../../reducers/reducer.controlTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Header visibility={VisibilityFilters.SHOW_TITLE} />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
