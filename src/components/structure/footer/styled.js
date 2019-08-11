import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const FooterWrapper = styled(Wrapper.BasicFlexWrapper)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  font-size: 9px;

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    padding: 0;
  }
`;

const InnerWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 0 auto;
  width: 50rem;
  justify-content: center;
  align-items: center;
  height: 3.75rem;
`;

const LinkWrapper = styled(Wrapper.BasicFlexWrapper)`
  font-family: 'Gothic A1', sans-serif;
  font-size: 8px;
  justify-content: center;
  align-items: center;
`;

const SlashSpan = styled.span`
  margin: 0 0.5rem;
`;

const Copyright = styled.p`
  text-align: center;
`;

export default {
  FooterWrapper,
  InnerWrapper,
  LinkWrapper,
  SlashSpan,
  Copyright,
};
