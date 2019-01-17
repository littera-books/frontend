import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const CenterWrapper = styled(Wrapper.BasicFlexWrapper)`
  justify-content: center;
`;

const QuestionItem = styled(Wrapper.BasicBlockWrapper)`
  margin: 2rem 0;
`;

const SelectionItem = styled(Wrapper.BasicBlockWrapper)`
  text-indent: 1rem;
`;

const SelectionText = styled.span`
  margin-left: 0.6rem;
`;

export default {
  CenterWrapper,
  QuestionItem,
  SelectionItem,
  SelectionText,
};
