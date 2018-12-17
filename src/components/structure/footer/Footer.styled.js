import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const FooterWrapper = styled(Wrapper.BasicFlexWrapper)`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  margin: 15px 0;
  width: 100vw;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled(Wrapper.BasicFlexWrapper)`
  margin: 0 auto;
  width: 44.25rem;
  justify-content: flex-end;
`;

const InfoWrapper = styled(Wrapper.BetweenWrapper)`
  align-items: center;
  height: 3.75rem;
`;

export default {
  FooterWrapper,
  InnerWrapper,
  InfoWrapper,
};
