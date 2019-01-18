import styled from 'styled-components';

const COLOR = {
  primary: '#363636',
};

const MEDIA = {
  mobileWidth: '414px',
};

const ResponsiveImg = styled.img`
  width: ${props => (props.width ? props.width : '100%')};
  height: auto;
`;

const BasicSmall = styled.small`
  display: block;
  font-size: 0.5rem;
  color: red;
`;

const BasicButton = styled.button`
  font-family: 'Palatino', 'Nanum Myeongjo';
  display: block;
  color: black;
  cursor: pointer;
  font-size: ${props => (props.size ? props.size : '1rem')};
  border: none;
  padding: 0;
  background-color: white;
  margin: ${props => (props.margin ? props.margin : 0)};

  :focus {
    outline: none;
  }
`;

const BasicInput = styled.input`
  font-family: 'Palatino', 'Nanum Myeongjo';
  font-size: 0.75rem;
  line-height: 2;
  border: none;
  border-bottom: ${props => (props.border ? props.border : 'none')};
  width: ${props => (props.narrow ? '9.5rem' : '20rem')};
  margin: 1rem 0;

  :focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }

  ::placeholder {
    font-family: 'Palatino', 'Nanum Myeongjo';
    color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${MEDIA.mobileWidth}) {
    width: ${props => (props.narrow ? '8.5rem' : '18rem')};
  }
`;

const BasicTextarea = styled.textarea`
  font-family: 'Palatino', 'Nanum Myeongjo';
  font-size: 0.75rem;
  line-height: 2;
  border: none;
  border-bottom: ${props => (props.border ? props.border : 'none')};
  width: 20rem;
  height: 10rem;
  margin: 1rem 0;

  :focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }

  ::placeholder {
    font-family: 'Palatino', 'Nanum Myeongjo';
    color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${MEDIA.mobileWidth}) {
    width: 18rem;
  }
`;

const BasicTitle = styled.h1`
  font-family: ${props => (props.fontFamily ? props.fontFamily : 'inherit')};
  font-size: ${props => (props.size ? props.size : '1rem')};
  text-align: ${props => (props.align ? props.align : 'left')};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
`;

const SubmitButton = styled(BasicButton)`
  width: ${props => (props.width ? props.width : '100%')};
  height: 3rem;
  background-color: ${COLOR.primary};
  color: white;
`;

export default {
  COLOR,
  MEDIA,
  ResponsiveImg,
  BasicSmall,
  BasicButton,
  BasicInput,
  BasicTextarea,
  BasicTitle,
  SubmitButton,
};
