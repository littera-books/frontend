import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const DropdownHr = styled.hr`
  border-style: solid;
  border-color: lightgray;
  border-width: 1px 0 0 0;
  margin: 0 0.5rem;
`;

const DropdownItem = styled(Wrapper.BasicFlexWrapper)`
  align-items: center;
  justify-content: flex-start;
  margin-left: 0.5rem;
  height: 2.5rem;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  display: none;
  width: 10rem;
  border: 1px solid lightgray;
  z-index: 1;
  font-size: 0.75rem;
`;

const DropdownTitle = styled(Wrapper.BetweenWrapper)`
  align-items: center;
`;

const Dropdown = styled(Wrapper.BasicBlockWrapper)`
  cursor: pointer;
  font-size: 1rem;
  z-index: 0;

  :hover {
    ${DropdownContent} {
      display: block;
    }
  }
`;

export default {
  Dropdown,
  DropdownTitle,
  DropdownContent,
  DropdownItem,
  DropdownHr,
};
