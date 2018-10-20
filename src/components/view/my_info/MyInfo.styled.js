import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const InfoWrapper = styled(Wrapper.ColumnWrapper)`
  width: 22.75rem;
  line-height: 5;
  margin: 1rem;

  @media (max-width: 414px) {
    width: 20rem;
    margin: 0 1.5rem;
  }

  @media (max-width: 320px) {
    margin: 0 1.5rem;
    width: 17rem;
    line-height: 4;
    font-size: 0.5rem;
  }
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
  }

  @media (max-width: 320px) {
    line-height: 4;
    font-size: 0.5rem;

    input {
      width: 17rem;
      font-size: 0.5rem;
    }

    button {
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

const LastNameParagraph = styled.p`
  width: 182px;
`;

export default {
  InfoWrapper,
  ScrollFlexWrapper,
  NameWrapper,
  LineHeightForm,
  AlignRightButton,
  ButtonGroup,
  LastNameParagraph,
};
