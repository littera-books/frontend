import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { About, mapDispatchToProps } from '.';
import dataConfig from '../../../config/dataConfig';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    filter: jest.fn(),
  };

  const enzymeWrapper = shallow(<About {...props} />);

  return { props, enzymeWrapper };
}

describe('About', () => {
  it('올바로 렌더링 되었는가', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('p').text()).toEqual(dataConfig.aboutText);
  });

  it('filter를 호출했을 때 값이 바뀌는가', () => {
    const { props } = setup();
    mapDispatchToProps(props.filter).filter(VisibilityFilters.SHOW_TITLE);
    expect(props.filter.mock.calls[0][0]).toEqual(
      setVisibilityFilter(VisibilityFilters.SHOW_TITLE).filter,
    );
  });
});
