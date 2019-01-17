import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const FooterWrapper = styled(Wrapper.BasicFlexWrapper)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  padding: 15px 0 30px 0;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  font-size: 9px;

  @media (max-width: 414px) {
    padding: 0;
  }
`;

const InnerWrapper = styled(Wrapper.BasicFlexWrapper)`
  margin: 0 auto;
  width: 44.25rem;
  justify-content: center;
  align-items: center;
  height: 3.75rem;
`;

const LinkWrapper = styled(Wrapper.BasicFlexWrapper)`
  position: absolute;
  right: 0;
  font-family: 'Gothic A1', sans-serif;
  font-size: 8px;
  margin-right: 0.75rem;
`;

const SlashSpan = styled.span`
  margin: 0 0.5rem;
`;

export default {
  FooterWrapper,
  InnerWrapper,
  LinkWrapper,
  SlashSpan,
};
