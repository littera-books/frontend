import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const SectionWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 0 1rem;
  width: 13rem;
  text-align: center;

  @media (max-width: 414px) {
    margin: 2rem 0;
    width: 100%;
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
