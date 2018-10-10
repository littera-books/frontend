import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const TitleWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: auto;
  padding: 3rem 0;
  width: 10rem;
  height: 10rem;

  @media (max-width: 375px) {
    padding: 3rem 0 1rem 0;
    width: 8rem;
    height: 8rem;
  }
`;

export default {
  TitleWrapper,
};
