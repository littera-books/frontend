import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Main } from './Main';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    getDetail: jest.fn(),
    filter: jest.fn(),
    items: [...Array(8).keys()],
  };

  const enzymeWrapper = shallow(<Main {...props} />);

  return { enzymeWrapper };
}

describe('Main', () => {
  it('state가 기기 width와 동일한가', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.state('width')).toEqual(window.innerWidth);
  });

  it('state를 414px 이하로 줄이면 캐러셀 컴포넌트가 실행되는가', () => {
    const { enzymeWrapper } = setup();
    enzymeWrapper.setState({ width: 300 });
    expect(enzymeWrapper.find('#carousel').exists()).toBe(true);
  });
});
