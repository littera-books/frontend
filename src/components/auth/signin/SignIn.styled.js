import styled from 'styled-components';
import StyledBase from '../../../styled_base/Wrapper';

const FormWrapper = styled.form`
  input {
    font-family: 'Silk Remington';
    font-size: 1.25rem;
    border: none;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-family: 'Silk Remington';
    color: black;
  }
`;

const SignInButton = styled(StyledBase.BasicButton)`
  margin: 2rem auto;
`;

export default {
  FormWrapper,
  SignInButton,
};
