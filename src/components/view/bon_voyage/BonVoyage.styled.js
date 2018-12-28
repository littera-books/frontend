import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const ProductWrapper = styled(Wrapper.BetweenWrapper)`
  width: 100%;
`;

const PaymentWrapper = styled(Wrapper.BasicBlockWrapper)`
  width: 100%;
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

const RawPriceSpan = styled.span`
  color: ${Element.COLOR.primary};
  text-decoration: line-through;
  opacity: 0.8;
`;

const ItemHr = styled.hr`
  width: 1rem;
  margin: 0.25rem auto;
  border-width: 0.5px;
`;

const OrderBox = styled(Wrapper.BasicBlockWrapper)`
  margin-top: 1.5rem;
`;

const ImgBox = styled(Wrapper.BasicBlockWrapper)`
  width: 3rem;
  margin-right: 1rem;
`;

const AcceptBox = styled(Wrapper.BasicBlockWrapper)`
  border: 1px solid ${Element.COLOR.primary};
  width: 20rem;
  padding: 0.5rem;
`;

const FlexForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 12rem;
  align-items: center;
  margin-left: 2rem;
`;

export default {
  ProductWrapper,
  PaymentWrapper,
  ProductItem,
  RawPriceSpan,
  ItemHr,
  OrderBox,
  ImgBox,
  AcceptBox,
  FlexForm,
};
