import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const FAQWrapper = styled(Wrapper.BasicFlexWrapper)`
  width: 100%;
  height: 100%;
  align-items: center;
`;

const FAQTitle = styled(Element.BasicTitle)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 24px 0 15px 0;
`;

const AccordionWrapper = styled(Wrapper.BasicBlockWrapper)`
  width: 44.25rem;
`;

const AccordionItem = styled(Wrapper.BasicBlockWrapper)`
  border-bottom: 1px solid ${Element.COLOR.primary};
`;

const QuestionGroup = styled(Wrapper.BetweenWrapper)`
  cursor: pointer;
  margin: 1.5rem 0;
`;

const HiddenAnswer = styled(Wrapper.BasicBlockWrapper)`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  &.active {
    max-height: 500px;
    opacity: 1;
    transition: all 0.7s cubic-bezier(0.86, 0, 0.07, 1);
    margin: 1rem 0;
  }
`;

export default {
  FAQWrapper,
  FAQTitle,
  AccordionWrapper,
  AccordionItem,
  QuestionGroup,
  HiddenAnswer,
};
