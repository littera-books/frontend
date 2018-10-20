import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const CardWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 0 0.25rem;
  width: 12rem;
  opacity: 0.3;
  :hover {
    opacity: 1;
  }

  @media (max-width: 414px) {
    margin: 0 auto;
    width: 13rem;
    height: 32rem;
  }

  @media (max-width: 375px) {
    margin: 0 auto;
    width: 12rem;
    height: 30rem;
  }

  @media (max-width: 320px) {
    margin: 0 auto;
    width: 10rem;
    height: 24.5rem;
  }
`;

const CardTitle = styled.h1`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 10rem;
  font-size: 11px;

  @media (max-width: 414px) {
    top: auto;
    bottom: 0;
  }
`;

export default {
  CardWrapper,
  CardTitle,
};
