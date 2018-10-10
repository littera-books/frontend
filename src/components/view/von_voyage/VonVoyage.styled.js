import styled from 'styled-components';
import StyledBase from '../../../styled_base/Base';

const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
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

const ItemTitleGroup = styled.div`
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ColumnForm = styled.form`
  display: block;
  position: relative;
`;

const AlignRightButton = styled(StyledBase.BasicButton)`
  margin-left: auto;
  margin-right: 4rem;
`;

const FixedButton = styled(StyledBase.BasicButton)`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 2rem;
`;

export default {
  ItemWrapper,
  ProductItem,
  ItemTitleGroup,
  ColumnForm,
  AlignRightButton,
  FixedButton,
};
