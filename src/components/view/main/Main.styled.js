import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const CardWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 0 0.75rem;
  height: 21.5rem;

  @media (max-width: 414px) {
    margin: 0 auto;
    width: 11rem;
    height: 28rem;
  }

  @media (max-width: 375px) {
    margin: 0 auto;
    width: 10rem;
    height: 25rem;
  }

  @media (max-width: 320px) {
    margin: 0 auto;
    width: 8rem;
    height: 20rem;
  }
`;

const InnerWrapper = styled(Wrapper.BasicBlockWrapper)`
  opacity: 0.4;
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

  @media (max-width: 414px) {
    top: auto;
    bottom: 0;
  }
`;

export default {
  CardWrapper,
  InnerWrapper,
  CardTitle,
};
