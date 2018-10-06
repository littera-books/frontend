import styled from 'styled-components';
import StyledBase from '../../../styled/Base';

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

  small {
    font-size: 0.5rem;
    color: red;
  }
`;

const SignInButton = styled(StyledBase.BasicButton)`
  font-family: 'Silk Remington';
  margin: 2rem auto;
`;

export default {
  FormWrapper,
  SignInButton,
};
