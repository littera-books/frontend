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

const FlexWrapper = styled.div`
  display: flex;
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

const BasicButton = styled.button`
  display: block;
  color: black;
  cursor: pointer;
  font-size: 1rem;
  border: none;

  :focus {
    outline: none;
  }
`;

export default {
  App,
  FlexWrapper,
  ColumnWrapper,
  ResponsiveImg,
  Paragraph,
  BasicButton,
};
