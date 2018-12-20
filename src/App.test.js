import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import { VisibilityFilters } from './reducers/reducer.controlTitle';
import { ScrollFilters } from './reducers/reducer.controlScroll';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    isVisible: VisibilityFilters.SHOW_TITLE,
    isScroll: ScrollFilters.UNABLE_SCROLL,
  };

  const enzymeWrapper = mount(<App {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('App', () => {
  it('기본 isVisible Props가 visible인가', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.props().isVisible).toBe(true);
  });
});
