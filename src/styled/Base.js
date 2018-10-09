import styled, { injectGlobal } from 'styled-components';
import RemingtonBoldWoff from '../assets/fonts/SilkRemington-Bold.woff';
import RemingtonBoldWoff2 from '../assets/fonts/SilkRemington-Bold.woff2';
import RemingtonRegularWoff from '../assets/fonts/SilkRemington-Regular.woff';
import RemingtonRegularWoff2 from '../assets/fonts/SilkRemington-Regular.woff2';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'Silk Remington';
    font-weight: bold;
    src: url(${RemingtonBoldWoff}) format('woff');
    src: url(${RemingtonBoldWoff2}) format('woff2');
  }
  
  @font-face {
    font-family: 'Silk Remington';
    font-weight: regular;
    src: url(${RemingtonRegularWoff}) format('woff');
    src: url(${RemingtonRegularWoff2}) format('woff2');
  }
`;

const App = styled.div`
  font-family: 'Silk Remington', 'Nanum Myeongjo';
  font-size: 1rem;
  line-height: 2;

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;

    :visited {
      color: black;
    }
  }
`;

const BasicFlexWrapper = styled.div`
  display: flex;
`;

const FlexWrapper = styled(BasicFlexWrapper)`
  justify-content: center;
  align-items: center;
  max-width: 60rem;
  min-height: calc(100vh - 20rem); // margin-bottom + title-height = 20rem
  margin: auto;
  margin-bottom: 10rem;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
`;

const Paragraph = styled.p`
  padding: 1rem;
  text-align: justify;
`;

const Small = styled.small`
  font-size: 0.5rem;
  color: red;
`;

const BasicButton = styled.button`
  font-family: 'Silk Remington', 'Nanum Myeongjo';
  display: block;
  color: black;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  padding: 0;
  background-color: white;

  :focus {
    outline: none;
  }
`;

const BasicInput = styled.input`
  font-family: 'Silk Remington', 'Nanum Myeongjo';
  font-size: 1rem;
  line-height: 2;
  border: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-family: 'Silk Remington', 'Nanum Myeongjo';
    color: black;
  }
`;

export default {
  App,
  BasicFlexWrapper,
  FlexWrapper,
  ColumnWrapper,
  ResponsiveImg,
  Paragraph,
  Small,
  BasicButton,
  BasicInput,
};
