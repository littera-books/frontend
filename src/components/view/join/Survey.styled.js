import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const ScrollFlexWrapper = styled(Wrapper.FlexWrapper)`
  margin-top: 10rem;

  @media (max-width: 375px) {
    margin-top: 8rem;
  }
`;

const MarginForm = styled.form`
  margin: 0 2rem;
  margin-bottom: 10rem;

  @media (max-width: 414px) {
    margin-bottom: 4rem;
  }
`;

const QuestionItem = styled(Wrapper.BasicBlockWrapper)`
  margin: 2rem 0;
`;

const SelectionItem = styled(Wrapper.BasicBlockWrapper)`
  text-indent: 1rem;
`;

const SelectionText = styled.span`
  margin-left: 0.5rem;
`;

const SmallButton = styled(Element.BasicButton)`
  margin: 1rem 0;
  font-size: 0.75rem;
`;

const AlignRightButton = styled(Element.BasicButton)`
  margin-top: 3rem;
  margin-left: auto;

  @media (max-width: 414px) {
    margin-right: auto;
  }
`;

const LongInput = styled(Element.BasicInput)`
  width: 20rem;
`;

export default {
  ScrollFlexWrapper,
  MarginForm,
  QuestionItem,
  SelectionItem,
  SelectionText,
  SmallButton,
  AlignRightButton,
  LongInput,
};
