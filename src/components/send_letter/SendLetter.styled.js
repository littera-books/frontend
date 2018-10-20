import styled from 'styled-components';
import Wrapper from '../../styled_base/Wrapper';
import Element from '../../styled_base/Element';

const LetterWrapper = styled(Wrapper.MobileBlockWrapper)`
  width: 50rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 414px) {
    width: 100%;
  }
`;

const MarginForm = styled.form`
  margin: 2rem;
  margin-bottom: 10rem;

  @media (max-width: 414px) {
    margin-bottom: 4rem;
  }
`;

const SendButton = styled(Element.BasicButton)`
  margin-top: 1rem;
  margin-left: auto;

  @media (max-width: 414px) {
    margin-top: 3rem;
    margin-right: auto;
  }
`;

export default {
  LetterWrapper,
  MarginForm,
  SendButton,
};
