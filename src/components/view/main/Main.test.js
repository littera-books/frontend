import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Main, mapDispatchToProps } from '.';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    getDetail: jest.fn(),
    filter: jest.fn(),
    items: [{}, {}, {}, {}],
    match: {
      url: '',
    },
  };

  const enzymeWrapper = shallow(<Main {...props} />);

  return { props, enzymeWrapper };
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

  it('filter를 호출했을 때 값이 바뀌는가', () => {
    const { props } = setup();
    mapDispatchToProps(props.filter).filter(VisibilityFilters.SHOW_TITLE);
    expect(props.filter.mock.calls[0][0]).toEqual(
      setVisibilityFilter(VisibilityFilters.SHOW_TITLE).filter,
    );
  });
});
