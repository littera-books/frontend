import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const LetterBoxWrapper = styled(Wrapper.ColumnWrapper)`
  @media (max-width: 414px) {
    margin: 0 2rem;
  }
`;

const LetterBoxFlexWrapper = styled(Wrapper.BasicFlexWrapper)`
  margin: 10rem auto;
  width: 50rem;

  @media (max-width: 414px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    margin-top: 8rem;
  }
`;

const NavigationWrapper = styled(Wrapper.BetweenWrapper)`
  margin-top: 3rem;
`;

const Content = styled(Wrapper.BasicBlockWrapper)`
  width: 50rem;
  min-height: 20rem;

  @media (max-width: 414px) {
    width: calc(100vw - 4rem);
    min-height: 10rem;
  }
`;

const TitleSpan = styled.span`
  margin-left: 3rem;
`;

const TimeParagraph = styled.p`
  margin-bottom: 3rem;
`;

export default {
  LetterBoxWrapper,
  LetterBoxFlexWrapper,
  NavigationWrapper,
  Content,
  TitleSpan,
  TimeParagraph,
};
