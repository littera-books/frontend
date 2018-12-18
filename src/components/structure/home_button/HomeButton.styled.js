import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const HomeButtonWrapper = styled(Wrapper.BasicBlockWrapper)`
  position: fixed;
  bottom: 5rem;
  width: 3rem;
  height: 3rem;
  margin-left: calc(44.25rem - 3rem);
  opacity: 0.4;

  :hover {
    opacity: 1;
  }
`;

export default {
  HomeButtonWrapper,
};
