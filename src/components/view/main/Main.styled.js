import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const CardWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 0 1rem;
  width: 13rem;

  @media (max-width: 414px) {
    margin: 0 auto;
    width: 14rem;
  }

  @media (max-width: 375px) {
    margin: 0 auto;
    width: 13rem;
  }

  @media (max-width: 320px) {
    margin: 0 auto;
    width: 10rem;
  }
`;

const CardTitle = styled.h1`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 10rem;
`;

const OpacityImg = styled(Element.ResponsiveImg)`
  opacity: 0.5;

  :hover {
    opacity: 1;
  }
`;

export default {
  CardWrapper,
  CardTitle,
  OpacityImg,
};
