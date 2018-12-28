import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Alert } from './Alert';

// Data
import dataConfig from '../../../dataConfig';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    close: jest.fn(),
  };

  const enzymeWrapper = shallow(<Alert {...props} />);

  return {
    enzymeWrapper,
  };
}

describe('Alert', () => {
  it('올바로 렌더링되었는가', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h1').text()).toBe(dataConfig.introText);
  });
});
