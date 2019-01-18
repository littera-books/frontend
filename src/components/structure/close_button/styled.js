import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const CloseButtonWrapper = styled(Wrapper.BasicBlockWrapper)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 30px 0 15px 0;

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    margin-right: 1rem;
  }
`;

export default {
  CloseButtonWrapper,
};
