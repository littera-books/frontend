import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const CardWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 0 0.75rem;
  height: 21.5rem;

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    margin: 0 auto;
    width: 8rem;
    height: unset;
  }
`;

const InnerWrapper = styled(Wrapper.BasicBlockWrapper)`
  opacity: ${props => (props.isOpacity ? 0.4 : 1)};
  :hover {
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

export default {
  CardWrapper,
  InnerWrapper,
  CardTitle,
};
