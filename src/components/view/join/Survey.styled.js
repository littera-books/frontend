import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const QuestionItem = styled(Wrapper.BasicBlockWrapper)`
  margin: 2rem 0;
`;

const SelectionItem = styled(Wrapper.BasicBlockWrapper)`
  text-indent: 1rem;
`;

const SelectionText = styled.span`
  margin-left: 0.5rem;
`;

const AlignRightButton = styled(Element.BasicButton)`
  margin-top: 3rem;
  margin-left: auto;
`;

export default {
  QuestionItem,
  SelectionItem,
  SelectionText,
  AlignRightButton,
};
