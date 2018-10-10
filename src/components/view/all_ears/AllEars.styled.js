import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const LetterWrapper = styled(Wrapper.MobileBlockWrapper)`
  width: 60rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 414px) {
    width: 100%;
  }
`;

const MarginForm = styled.form`
  margin: 1rem;
  margin-bottom: 3rem;
  height: 30rem;

  @media (max-width: 414px) {
    height: calc(100vh - 16rem);
  }

  @media (max-width: 375px) {
    height: calc(100vh - 14rem);
  }
`;

const AlignRightButton = styled(Element.BasicButton)`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: 1rem;
`;

export default {
  LetterWrapper,
  MarginForm,
  AlignRightButton,
};
