import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';

const CloseButtonWrapper = styled(Wrapper.BasicBlockWrapper)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const CloseButton = styled.img`
  width: 1rem;
  height: 1rem;
  display: block;
  margin-left: auto;
`;

export default {
  CloseButtonWrapper,
  CloseButton,
};
