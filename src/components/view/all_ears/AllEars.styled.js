import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const AccordianWrapper = styled(Wrapper.BasicBlockWrapper)`
  width: 44.25rem;
`;

const AccordianItem = styled(Wrapper.BasicBlockWrapper)`
  border-bottom: 1px solid ${Element.COLOR.primary};
`;

const QuestionGroup = styled(Wrapper.BetweenWrapper)`
  cursor: pointer;
  margin: 1.5rem 0;
`;

const HiddenAnswer = styled(Wrapper.BasicBlockWrapper)`
  overflow: hidden;
  animation: slide-down 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;

  &.active {
    animation: slide-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }

  @keyframes slide-up {
    0% {
      max-height: 0;
      opacity: 0;
    }
    100% {
      max-height: 500px;
      opacity: 1;
      margin: 1rem 0;
    }
  }

  @keyframes slide-down {
    0% {
      max-height: 500px;
      opacity: 1;
      margin: 1rem 0;
    }
    100% {
      max-height: 0;
      opacity: 0;
    }
  }
`;

export default {
  AccordianWrapper,
  AccordianItem,
  QuestionGroup,
  HiddenAnswer,
};
