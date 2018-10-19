import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const InfoWrapper = styled(Wrapper.ColumnWrapper)`
  width: 20rem;
  margin: 1rem;
`;

const ScrollFlexWrapper = styled(Wrapper.FlexWrapper)`
  margin-top: 10rem;
  min-height: 100%;

  @media (max-width: 375px) {
    margin-top: 8rem;
  }
`;

const NameWrapper = styled(Wrapper.BetweenWrapper)`
  @media (max-width: 414px) {
    flex-direction: column;
  }
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

const ButtonGroup = styled(Wrapper.BetweenWrapper)`
  margin: 1rem 0;
`;

const AlignRightButton = styled(Element.BasicButton)`
  margin-top: 1rem;
  margin-left: auto;
`;

const LongInput = styled(Element.BasicInput)`
  width: 20rem;
`;

export default {
  InfoWrapper,
  ScrollFlexWrapper,
  NameWrapper,
  LineHeightForm,
  AlignRightButton,
  ButtonGroup,
  LongInput,
};
