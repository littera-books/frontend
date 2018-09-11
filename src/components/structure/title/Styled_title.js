import styled from 'styled-components';

const TitleWrapper = styled.div`
  margin: auto;
  padding: 3rem 0;
  max-width: 10rem;

  @media (max-width: 375px) {
    padding: 3rem 0 1rem 0;
    max-width: 8rem;
  }
`;

export default {
  TitleWrapper,
};
