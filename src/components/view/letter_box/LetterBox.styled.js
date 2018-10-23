import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const LetterWrapper = styled(Wrapper.MobileBlockWrapper)`
  width: 50rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 414px) {
    width: 100%;
  }
`;

const LetterBoxWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 2rem;
  margin-bottom: 10rem;

  @media (max-width: 414px) {
    margin-bottom: 4rem;
  }
`;

const InfoWrapper = styled(Wrapper.ColumnWrapper)`
  width: 28rem;
  line-height: 3;
  margin: 1rem;

  @media (max-width: 414px) {
    width: 23rem;
    margin: 0 1.5rem;
  }

  @media (max-width: 320px) {
    margin: 0 1.5rem;
    width: 17rem;
    font-size: 0.5rem;
  }
`;

const NavigationWrapper = styled(Wrapper.BetweenWrapper)`
  margin-top: 1rem;
`;

const Content = styled(Wrapper.BasicBlockWrapper)`
  min-height: calc(40vh - 1.5rem);
`;

const TitleSpan = styled.span`
  margin-left: 3rem;
`;

const TimeParagraph = styled.p`
  margin-bottom: 3rem;
`;

const PaginationWrapper = styled(Wrapper.BasicFlexWrapper)`
  margin-top: 1.5rem;
  justify-content: center;
`;

const PaginationItem = styled(Element.BasicButton)`
  margin: 0 0.5rem;
`;

export default {
  LetterWrapper,
  LetterBoxWrapper,
  InfoWrapper,
  NavigationWrapper,
  Content,
  TitleSpan,
  TimeParagraph,
  PaginationWrapper,
  PaginationItem,
};
