import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Intro, mapDispatchToProps } from './Intro';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../reducers/reducer.controlTitle';

// Data
import dataConfig from '../../dataConfig';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    filter: jest.fn(),
  };

  const enzymeWrapper = shallow(<Intro {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Intro', () => {
  it('올바로 렌더링되었는가', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h1').text()).toBe(dataConfig.introText);
  });

  it('filter를 호출했을 때 값이 바뀌는가', () => {
    const { props } = setup();
    mapDispatchToProps(props.filter).filter(VisibilityFilters.HIDE_TITLE);
    expect(props.filter.mock.calls[0][0]).toEqual(
      setVisibilityFilter(VisibilityFilters.HIDE_TITLE).filter,
    );
  });
});
