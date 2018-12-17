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
  align-items: center;
  height: 3.75rem;
`;

const LinkWrapper = styled(Wrapper.BasicFlexWrapper)`
  margin-left: 1rem;
`;

export default {
  FooterWrapper,
  InnerWrapper,
  LinkWrapper,
};
