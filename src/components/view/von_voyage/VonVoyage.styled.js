import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const ProductItem = styled(Wrapper.ColumnWrapper)`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 4rem;
  height: 16rem;

  @media (max-width: 414px) {
    height: calc(100vh - 10rem);
  }

  @media (max-width: 375px) {
    height: calc(100vh - 8rem);
  }
`;

const ItemTitleGroup = styled(Wrapper.ColumnWrapper)`
  height: 14rem;
  justify-content: center;
`;

const AlignRightButton = styled(Element.BasicButton)`
  margin-left: auto;
  margin-right: 4rem;
`;

const FixedButton = styled(Element.BasicButton)`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 2rem;
`;

export default {
  ProductItem,
  ItemTitleGroup,
  AlignRightButton,
  FixedButton,
};
