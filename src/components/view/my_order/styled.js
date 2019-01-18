import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const OrderWrapper = styled(Wrapper.ColumnWrapper)`
  justify-content: center;
  align-items: center;
  width: 44.25rem;

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    width: 18rem;
    margin: 0 1rem;
  }
`;

const BookLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 20rem;
`;

const PaginationWrapper = styled(Wrapper.BasicFlexWrapper)`
  justify-content: center;
  margin-top: 2rem;
`;

export default {
  OrderWrapper,
  BookLi,
  PaginationWrapper,
};
