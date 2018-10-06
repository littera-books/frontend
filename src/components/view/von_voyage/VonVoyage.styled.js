import styled from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
  display: block;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;

  @media (max-width: 414px) {
    height: calc(100vh - 13rem);
  }

  @media (max-width: 375px) {
    height: calc(100vh - 10rem);
  }
`;

export default {
  SliderWrapper,
  ProductItem,
};
