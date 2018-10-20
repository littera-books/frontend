import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const ScrollFlexWrapper = styled(Wrapper.FlexWrapper)`
  margin-top: 10rem;
  min-height: 100%;

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

const LineHeightForm = styled.form`
  line-height: 5;

  @media (max-width: 375px) {
    margin: 0 1.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 320px) {
    line-height: 4;
    input {
      width: 17rem;
      font-size: 0.5rem;
    }
  }
`;

const AlignRightButton = styled(Element.BasicButton)`
  margin-top: 3rem;
  margin-left: auto;

  @media (max-width: 414px) {
    margin-right: auto;
    margin-top: 1rem;
  }
`;

export default {
  ScrollFlexWrapper,
  MarginForm,
  QuestionItem,
  SelectionItem,
  SelectionText,
  LineHeightForm,
  AlignRightButton,
};
