import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const SectionWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 0 1rem;
  width: 13rem;
  text-align: center;

  @media (max-width: 414px) {
    margin: 0;
    height: 32rem;
  }

  @media (max-width: 375px) {
    margin: 0;
    height: 30rem;
  }

  @media (max-width: 320px) {
    margin: 0;
    height: 23rem;
  }
`;

const SectionItem = styled(Wrapper.BasicFlexWrapper)`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default {
  SectionWrapper,
  SectionItem,
};
