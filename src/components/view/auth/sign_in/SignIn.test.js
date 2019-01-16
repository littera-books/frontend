import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignIn } from '.';
import { initialState } from '../../../../reducers/reducer.auth';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    history: {
      replace: jest.fn(),
    },
    setPopup: jest.fn(),
    init: jest.fn(),
    logIn: jest.fn(),
    handleSubmit: jest.fn(),
    error: initialState.error,
    filter: jest.fn(),
    match: {
      url: '',
    },
  };

  const enzymeWrapper = shallow(<SignIn {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('SignIn', () => {
  it('올바로 렌더링되었는가', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('#submit').props().children).toBe('Enter');
  });
});
