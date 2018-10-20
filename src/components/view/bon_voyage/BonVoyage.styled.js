import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const MarginForm = styled.form`
  @media (max-width: 414px) {
    padding-top: 3rem;
  }

  @media (max-width: 320px) {
    padding-top: 0rem;
  }
`;

const ProductItem = styled(Wrapper.ColumnWrapper)`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 1rem;
  width: 13rem;

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

  @media (max-width: 414px) {
    margin-bottom: 0rem;
  }
`;

const AlignRightButton = styled(Element.BasicButton)`
  margin-top: 3rem;
  margin-left: auto;
  margin-right: 1rem;
  width: 13rem;

  @media (max-width: 414px) {
    margin-top: 5rem;
    margin-right: auto;
  }
`;

export default {
  MarginForm,
  ProductItem,
  ItemTitleGroup,
  AlignRightButton,
};
