import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const LetterBoxWrapper = styled(Wrapper.ColumnWrapper)`
  margin: 1rem;
`;

const LetterBoxFlexWrapper = styled(Wrapper.BasicFlexWrapper)`
  margin: 10rem auto;
  width: 60rem;

  @media (max-width: 414px) {
    width: 100vw;
  }

  @media (max-width: 375px) {
    margin-top: 8rem;
  }
`;

const NavigationWrapper = styled(Wrapper.BetweenWrapper)`
  margin-top: 3rem;
`;

const Content = styled(Wrapper.BasicBlockWrapper)`
  width: 60rem;
  min-height: 20rem;

  @media (max-width: 414px) {
    width: calc(100vw - 2rem);
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
