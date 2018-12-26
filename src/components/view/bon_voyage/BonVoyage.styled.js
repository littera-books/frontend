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
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 0.75rem;
  width: 9.5rem;

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

const ItemHr = styled.hr`
  width: 1rem;
  margin: 0.25rem 0;
`;

export default {
  MarginForm,
  InfoWrapper,
  ProductItem,
  ItemTitleGroup,
  AlignRightButton,
  ItemHr,
};
