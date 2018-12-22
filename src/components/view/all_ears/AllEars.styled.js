import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const AccordianWrapper = styled(Wrapper.BasicBlockWrapper)`
  width: 44.25rem;
`;

const AccordianItem = styled(Wrapper.BasicBlockWrapper)`
  border-bottom: 1px solid ${Element.COLOR.primary};
  transition: all 0.6s cubic-bezier(1, 0, 0, 1);
`;

const QuestionGroup = styled(Wrapper.BetweenWrapper)`
  cursor: pointer;
  margin: 1rem 0;
`;

const HiddenAnswer = styled(Wrapper.BasicBlockWrapper)`
  display none;

  &.active {
    display: block;
    margin: 1rem 0;
  }
`;

export default {
  AccordianWrapper,
  AccordianItem,
  QuestionGroup,
  HiddenAnswer,
};
