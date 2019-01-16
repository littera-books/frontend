import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

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
  BookLi,
  PaginationWrapper,
};
