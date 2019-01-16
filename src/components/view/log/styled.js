import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const SectionWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 0 1rem;
  width: 13rem;
  text-align: center;

  @media (max-width: 414px) {
    margin: 2rem 0;
    width: 100%;
  }
`;

const SectionItem = styled(Wrapper.BasicFlexWrapper)`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

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

  &.active {
    display: block;
  }
`;

const DropdownTitle = styled(Wrapper.BetweenWrapper)`
  align-items: center;
`;

const Dropdown = styled(Element.BasicButton)`
  position: relative;
  display: inline-block;
`;

export default {
  SectionWrapper,
  SectionItem,
  Dropdown,
  DropdownTitle,
  DropdownContent,
  DropdownItem,
  DropdownHr,
};
