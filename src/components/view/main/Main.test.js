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
    width: window.innerWidth,
  };

  const enzymeWrapper = shallow(<Main {...props} />);

  return { props, enzymeWrapper };
}

describe('Main', () => {
  it('state가 기기 width와 동일한가', () => {
    const { props } = setup();
    expect(props.width).toEqual(window.innerWidth);
  });

  it('filter를 호출했을 때 값이 바뀌는가', () => {
    const { props } = setup();
    mapDispatchToProps(props.filter).filter(VisibilityFilters.SHOW_TITLE);
    expect(props.filter.mock.calls[0][0]).toEqual(
      setVisibilityFilter(VisibilityFilters.SHOW_TITLE).filter,
    );
  });
});
