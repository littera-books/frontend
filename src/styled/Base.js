import styled from 'styled-components';

const App = styled.div`
  font-family: 'Nanum Myeongjo', serif;
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
