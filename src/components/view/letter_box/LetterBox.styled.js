import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const LetterBoxWrapper = styled(Wrapper.ColumnWrapper)`
  margin: 1rem;
`;

const NavigationWrapper = styled(Wrapper.BetweenWrapper)`
  margin-top: 3rem;
`;

const TitleSpan = styled.span`
  margin-left: 3rem;
`;

export default {
  LetterBoxWrapper,
  NavigationWrapper,
  TitleSpan,
};
