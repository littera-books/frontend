import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const TitleWrapper = styled(Wrapper.BasicFlexWrapper)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  padding-top: 3rem;
  margin-bottom: 3rem;
  width: 100vw;
  height: 7rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 375px) {
    padding-top: 2rem;
    margin-bottom: 2rem;
    height: 6rem;
  }
`;

const TitleImg = styled(Element.ResponsiveImg)`
  width: 10rem;

  @media (max-width: 375px) {
    width: 8rem;
  }
`;

export default {
  TitleWrapper,
  TitleImg,
};
