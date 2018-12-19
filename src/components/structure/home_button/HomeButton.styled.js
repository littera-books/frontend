import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const HomeButtonWrapper = styled(Wrapper.BasicBlockWrapper)`
  position: sticky;
  bottom: 5rem;
  left: 0;
  width: 3rem;
  height: 3rem;
  margin-left: 41.25rem;
  opacity: 0.4;

  :hover {
    opacity: 1;
  }
`;

export default {
  HomeButtonWrapper,
};
