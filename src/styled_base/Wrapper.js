import styled, { createGlobalStyle } from 'styled-components';
import Element from './Element';

import PalatinoBoldWoff from '../assets/fonts/palab.woff';
import PalatinoBoldWoff2 from '../assets/fonts/palab.woff2';
import PalatinoRegularWoff from '../assets/fonts/pala.woff';
import PalatinoRegularWoff2 from '../assets/fonts/pala.woff2';

const GlobalStyle = createGlobalStyle`
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

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    word-break: normal;
  }
`;

const BasicBlockWrapper = styled.div`
  position: relative;
  display: block;
`;

const ScrollWrapper = styled(BasicBlockWrapper)`
  padding-top: 30px;
  margin-bottom: 15rem;

  ol {
    padding-left: 12px;
  }
`;

const CarouselGuardWrapper = styled(BasicBlockWrapper)`
  width: 100vw;

  .slick-dots {
    bottom: -3rem !important;
  }
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

const ContainerWrapper = styled(BasicFlexWrapper)`
  justify-content: center;
  align-items: ${props => (props.scroll ? 'flex-start' : 'center')};
  width: 44.25rem;
  height: 37.5rem;
  margin-bottom: 2rem;

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    width: 20rem;
    height: 31.25rem;
    margin-bottom: 0;
  }
`;

const FlexWrapper = styled(BasicFlexWrapper)`
  justify-content: center;
  align-items: center;
  width: 44.25rem;

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    width: 18rem;
    margin: 0 1rem;
  }
`;

const ColumnWrapper = styled(BasicFlexWrapper)`
  flex-direction: column;
`;

const BetweenWrapper = styled(BasicFlexWrapper)`
  justify-content: space-between;
  align-items: ${props => (props.align ? props.align : 'flex-start')};
  margin: ${props => (props.margin ? props.margin : '0')};
`;

const QuillEditor = styled(BasicBlockWrapper)`
  .ql-editor {
    font-family: 'Silk Remington', 'Nanum Myeongjo';
    font-size: 0.75rem;
    line-height: 2;
    text-align: justify;
    word-break: keep-all;
    width: 20rem;
    min-height: 16rem;
    border-bottom: 1px solid ${Element.COLOR.primary};
    margin: 2rem 0;
    padding: 0;

    @media (max-width: ${Element.MEDIA.mobileWidth}) {
      min-height: calc(100vh - 18rem);
      /* title height + button height + margin-bottom = 18rem */
    }
  }

  .ql-editor.ql-blank::before {
    left: 0;
  }
`;

export default {
  GlobalStyle,
  App,
  BasicBlockWrapper,
  ContainerWrapper,
  ScrollWrapper,
  CarouselGuardWrapper,
  BasicFlexWrapper,
  ViewPortWrapper,
  FlexWrapper,
  ColumnWrapper,
  BetweenWrapper,
  QuillEditor,
};
