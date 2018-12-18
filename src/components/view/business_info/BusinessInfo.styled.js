import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const WidthWrapper = styled(Wrapper.BasicBlockWrapper)`
  width: 100%;
`;

const InfoWrapper = styled(Wrapper.BasicFlexWrapper)`
  align-items: flex-start;
  width: 100%;
  margin-bottom: ${props => (props.noBottom ? '0' : '3rem')};
`;

const TitleWrapper = styled(Wrapper.BasicFlexWrapper)`
  flex: 1;
`;

const ContentWrapper = styled(Wrapper.BasicFlexWrapper)`
  flex: 2;
`;

export default {
  WidthWrapper,
  InfoWrapper,
  TitleWrapper,
  ContentWrapper,
};
