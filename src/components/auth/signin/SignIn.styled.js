import styled from 'styled-components';

const FormWrapper = styled.form`
  input,
  button {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 1.25rem;
    border: none;
  }

  input:focus,
  button:focus {
    outline: none;
  }

  button {
    background-color: white;
    padding: 0;
    margin: 2rem 0;
  }

  button:hover {
    cursor: pointer;
  }

  input::placeholder {
    font-family: 'Nanum Myeongjo', serif;
    color: black;
  }

  small {
    font-size: 0.5rem;
    color: red;
  }
`;

export default {
  FormWrapper,
};
