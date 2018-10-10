import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const TitleWrapper = styled(Wrapper.BasicBlockWrapper)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: white;
  margin: auto;
  padding: 3rem 0;
  width: 10rem;
  height: 10rem;

  @media (max-width: 375px) {
    padding: 2rem 0;
    width: 8rem;
    height: 8rem;
  }
`;

export default {
  TitleWrapper,
};
