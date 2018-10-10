import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const CardWrapper = styled(Wrapper.BasicBlockWrapper)`
  margin: 1rem;
  max-width: 13rem;

  @media (max-width: 414px) {
    margin: 1rem auto;
  }
`;

const CardTitle = styled.h1`
  position: absolute;
  top: 4em;
  left: 50%;
  transform: translateX(-50%);
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
