import styled from 'styled-components';
import StyledBase from '../../../styled/Base';

const QuestionItem = styled.div`
  margin: 2rem 0;
`;

const SelectionItem = styled.div`
  text-indent: 1rem;
`;

const SelectionText = styled.span`
  margin-left: 0.5rem;
`;

const AlignRightButton = styled(StyledBase.BasicButton)`
  margin-top: 3rem;
  margin-left: auto;
`;

export default {
  QuestionItem,
  SelectionItem,
  SelectionText,
  AlignRightButton,
};
