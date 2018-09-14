import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignIn } from './SignIn';
import { initialState } from '../../../reducers/reducer.auth';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    init: jest.fn(),
    logIn: jest.fn(),
    handleSubmit: jest.fn(),
    error: initialState.error,
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
    expect(enzymeWrapper.find('button').text()).toBe('Sign In');
  });
});
