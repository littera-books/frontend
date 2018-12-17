import styled, { injectGlobal } from 'styled-components';

import PalatinoBoldWoff from '../assets/fonts/palab.woff';
import PalatinoBoldWoff2 from '../assets/fonts/palab.woff2';
import PalatinoRegularWoff from '../assets/fonts/pala.woff';
import PalatinoRegularWoff2 from '../assets/fonts/pala.woff2';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'Palatino';
    font-weight: bold;
    src: url(${PalatinoBoldWoff}) format('woff');
    src: url(${PalatinoBoldWoff2}) format('woff2');
  }
  
  @font-face {
    font-family: 'Palatino';
    font-weight: regular;
    src: url(${PalatinoRegularWoff}) format('woff');
    src: url(${PalatinoRegularWoff2}) format('woff2');
  }
`;

const App = styled.div`
  font-family: 'Palatino', 'Nanum Myeongjo';
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

const CarouselGuardWrapper = styled(BasicBlockWrapper)`
  width: 100vw;
`;

const BasicFlexWrapper = styled.div`
  position: relative;
  display: flex;
`;

const ViewPortWrapper = styled(BasicFlexWrapper)`
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const FlexWrapper = styled(BasicFlexWrapper)`
  justify-content: center;
  align-items: center;
  width: 44.25rem;
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
      /* title height + button height + margin-bottom = 18rem */
    }

    @media (max-width: 375px) {
      min-height: calc(100vh - 16rem);
    }
  }

  .ql-editor.ql-blank::before {
    left: 0;
  }
`;

export default {
  App,
  BasicBlockWrapper,
  MobileBlockWrapper,
  CarouselGuardWrapper,
  BasicFlexWrapper,
  ViewPortWrapper,
  FlexWrapper,
  ColumnWrapper,
  MobileColumnWrapper,
  BetweenWrapper,
  QuillEditor,
};
