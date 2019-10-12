import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const CardWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 0 0.75rem;
  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    margin: 0 auto;
    width: 8rem;
    height: unset;
  }

  @media (max-width: ${Element.MEDIA.iphone5Width}) {
    width: 7rem;
  }
`;

const InnerWrapper = styled(Wrapper.BasicBlockWrapper)`
  opacity: ${props => (props.isOpacity ? 0.4 : 1)};
  :hover {
    opacity: 1;
  }

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    opacity: 1;
  }
`;

const CardTitle = styled.h1`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 10rem;

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    top: 3.5rem;
  }
`;

const Dots = styled.ul`
  li {
    width: 32px !important;
    height: 32px !important;
    button {
      width: 32px !important;
      height: 32px !important;
    &:before {
      width: 32px !important;
      height: 32px !important;
      font-size: 12px !important;
    }
  }
`;

export default {
  Dots,
  CardWrapper,
  InnerWrapper,
  CardTitle,
};
