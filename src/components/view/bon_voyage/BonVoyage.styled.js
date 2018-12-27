import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const ProductWrapper = styled(Wrapper.BetweenWrapper)`
  width: 100%;
`;

const InfoWrapper = styled(Wrapper.ColumnWrapper)`
  width: 28rem;
  line-height: 3;
  margin: 1rem;

  @media (max-width: 414px) {
    width: 23rem;
    margin: 0 1.5rem;
  }

  @media (max-width: 320px) {
    margin: 0 1.5rem;
    width: 17rem;
    font-size: 0.5rem;
  }
`;

const ProductItem = styled(Wrapper.ColumnWrapper)`
  justify-content: baseline;
  align-items: center;
  text-align: center;
  ${props => props.card && 'width: 9.5rem;'}

  @media (max-width: 414px) {
    width: 100%;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

const ItemTitleGroup = styled(Wrapper.ColumnWrapper)`
  height: 14rem;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 414px) {
    margin-bottom: 0rem;
  }
`;

const ItemHr = styled.hr`
  width: 1rem;
  margin: 0.25rem auto;
  border-width: 0.5px;
`;

export default {
  ProductWrapper,
  InfoWrapper,
  ProductItem,
  ItemTitleGroup,
  ItemHr,
};
