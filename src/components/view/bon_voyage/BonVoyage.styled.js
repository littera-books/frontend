import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const ProductWrapper = styled(Wrapper.BetweenWrapper)`
  width: 100%;
`;

const PaymentWrapper = styled(Wrapper.ColumnWrapper)`
  align-items: center;
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
  width: 6rem;
  margin-right: 1rem;
`;

const AcceptBox = styled(Wrapper.BasicBlockWrapper)`
  border: 1px solid ${Element.COLOR.primary};
  width: 20rem;
  padding: ${props => (props.padding ? props.padding : '0.75rem')};
  margin-top: 1rem;
  line-height: ${props => (props.lineHeight ? props.lineHeight : 'inherit')};
`;

const FlexForm = styled.form`
  display: flex;
  justify-content: flex-end;
  width: 20rem;
  align-items: center;
`;

const OptionSpan = styled.span`
  margin-right: 0.6rem;
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
  OptionSpan,
};
