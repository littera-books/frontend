import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const TitleWrapper = styled(Wrapper.BasicFlexWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: white;
  padding: 30px 0 15px 0;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const TitleImg = styled.img`
  width: auto;
  height: 3.75rem;
  padding: 10px 0;

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    padding: 1rem 0;
  }
`;

export default {
  TitleWrapper,
  TitleImg,
};
