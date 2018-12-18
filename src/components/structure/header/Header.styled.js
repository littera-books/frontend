import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const TitleWrapper = styled(Wrapper.BasicFlexWrapper)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  padding: 30px 0 15px 0;
  width: 100vw;
  height: auto;
  justify-content: center;
  align-items: center;

  @media (max-width: 375px) {
    padding-top: 2rem;
    margin-bottom: 2rem;
    height: 6rem;
  }
`;

const TitleImg = styled.img`
  width: auto;
  height: 3.75rem;
  padding: 10px 0;
`;

export default {
  TitleWrapper,
  TitleImg,
};
