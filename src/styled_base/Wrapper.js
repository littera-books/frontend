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
  font-size: 0.75rem;
  line-height: 2;
  text-align: justify;
  word-break: keep-all;

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;

    :visited {
      color: black;
    }
  }
`;

const BasicBlockWrapper = styled.div`
  position: relative;
  display: block;
`;

const MobileBlockWrapper = styled(BasicBlockWrapper)`
  margin-top: 10rem;

  @media (max-width: 375px) {
    margin-top: 8rem;
  }
`;

const BasicFlexWrapper = styled.div`
  position: relative;
  display: flex;
`;

const FlexWrapper = styled(BasicFlexWrapper)`
  justify-content: center;
  align-items: center;
  max-width: 50rem;
  min-height: 100vh;
  margin: auto;
`;

const ColumnWrapper = styled(BasicFlexWrapper)`
  flex-direction: column;
`;

const MobileColumnWrapper = styled(ColumnWrapper)`
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const BetweenWrapper = styled(BasicFlexWrapper)`
  justify-content: space-between;
`;

const QuillEditor = styled(BasicBlockWrapper)`
  .ql-editor {
    font-family: 'Silk Remington', 'Nanum Myeongjo';
    font-size: 0.75rem;
    line-height: 2;
    text-align: justify;
    word-break: keep-all;
    min-height: 50vh;
    padding: 0;

    @media (max-width: 414px) {
      min-height: calc(100vh - 18rem);
    }

    @media (max-width: 375px) {
      min-height: calc(100vh - 16rem);
    }
  }
`;

export default {
  App,
  BasicBlockWrapper,
  MobileBlockWrapper,
  BasicFlexWrapper,
  FlexWrapper,
  ColumnWrapper,
  MobileColumnWrapper,
  BetweenWrapper,
  QuillEditor,
};
