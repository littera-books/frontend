import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import BorderBox from '../../../assets/images/border-box.png';

const ProductWrapper = styled(Wrapper.BetweenWrapper)`
  width: 100%;
`;

const ProductDetailWrapper = styled(Wrapper.ColumnWrapper)`
  align-items: flex-start;
  border: 2px solid ${Element.COLOR.primary};
  border-image: url(${BorderBox});
  border-image-slice: 10;
  border-image-repeat: round;
  padding: 1.25rem 0.75rem;
`;

const PaymentWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin-top: 2rem;

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    width: 18rem;
    margin: 0 1rem;
  }
`;

const ProductItem = styled(Wrapper.BasicBlockWrapper)`
  text-align: center;
  img {
    width: 70%;
  }

  ${props => props.card && 'width: 9.5rem;'};

  ${props => !props.isVisible
    && `
    cursor: not-allowed;
    opacity: 0.4;

    > a {
      cursor: not-allowed;
      pointer-events: none;
    }
  `};

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    display: block !important;
    margin: 0 auto;
    width: 8rem !important;
    height: unset;

    img {
      width: 100%;
    }
  }

  @media (max-width: ${Element.MEDIA.iphone5Width}) {
    width: 7rem !important;
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
  border: 2px solid ${Element.COLOR.primary};
  border-image: url(${BorderBox});
  border-image-slice: 10;
  border-image-repeat: round;
  padding: ${props => (props.padding ? props.padding : '0.75rem')};
  margin-top: 1rem;
  line-height: ${props => (props.lineHeight ? props.lineHeight : 'inherit')};
`;

const FlexForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const OptionSpan = styled.span`
  margin-right: 0.6rem;
`;

const MsgParagraph = styled.p`
  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    font-size: 11px;
  }
`;

export default {
  ProductWrapper,
  ProductDetailWrapper,
  PaymentWrapper,
  ProductItem,
  RawPriceSpan,
  ItemHr,
  OrderBox,
  ImgBox,
  AcceptBox,
  FlexForm,
  OptionSpan,
  MsgParagraph,
};
