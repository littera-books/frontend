import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const ProductItem = styled(Wrapper.ColumnWrapper)`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 1rem;
  width: 13rem;

  @media (max-width: 414px) {
    width: 100%;
    margin: 0;
    height: calc(100vh - 10rem);
  }

  @media (max-width: 375px) {
    width: 100%;
    margin: 0;
    height: calc(100vh - 8rem);
  }
`;

const ItemTitleGroup = styled(Wrapper.ColumnWrapper)`
  height: 14rem;
  margin-bottom: 3rem;
  justify-content: center;

  @media (max-width: 414px) {
    margin-bottom: 1rem;
  }
`;

const AlignRightButton = styled(Element.BasicButton)`
  margin-top: 3rem;
  margin-left: auto;
  margin-right: 1rem;
  width: 13rem;
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
