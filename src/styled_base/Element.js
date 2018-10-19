import styled from 'styled-components';

const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
`;

const BasicSmall = styled.small`
  display: block;
  font-size: 0.5rem;
  color: red;
`;

const BasicButton = styled.button`
  font-family: 'Silk Remington', 'Nanum Myeongjo';
  display: block;
  color: black;
  cursor: pointer;
  font-size: 0.75rem;
  border: none;
  padding: 0;
  background-color: white;

  :focus {
    outline: none;
  }
`;

const BasicInput = styled.input`
  font-family: 'Silk Remington', 'Nanum Myeongjo';
  font-size: 0.75rem;
  line-height: 2;
  border: none;

  :focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }

  ::placeholder {
    font-family: 'Silk Remington', 'Nanum Myeongjo';
    color: rgba(0, 0, 0, 0.3);
  }
`;

export default {
  ResponsiveImg,
  BasicSmall,
  BasicButton,
  BasicInput,
};
