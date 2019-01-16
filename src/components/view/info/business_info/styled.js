import styled from 'styled-components';
import Wrapper from '../../../../styled_base/Wrapper';

const WidthWrapper = styled(Wrapper.ColumnWrapper)`
  width: 100%;
  font-size: 9px;
  align-items: center;
`;

const InfoWrapper = styled(Wrapper.BasicFlexWrapper)`
  align-items: flex-start;
  width: 70%;
  margin-bottom: ${props => (props.noBottom ? '0' : '1.5rem')};
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
