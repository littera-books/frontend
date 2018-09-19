import styled from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
  display: block;
`;

const CardWrapper = styled.div`
  position: relative;
  margin: 1rem;
  max-width: 13rem;

  img {
    opacity: 0.5;

    :hover {
      opacity: 1;
    }
  }

  @media (max-width: 414px) {
    margin: 1rem auto;
  }
`;

const CardTitle = styled.h1`
  position: absolute;
  top: 4em;
  left: 50%;
  transform: translateX(-50%);
`;

export default {
  SliderWrapper,
  CardWrapper,
  CardTitle,
};
