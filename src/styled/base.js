import styled from 'styled-components';

const App = styled.div`
  height: 100vh;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60rem;
  height: 100%;
  margin: auto;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
`;

export default {
  App,
  FlexWrapper,
  ColumnWrapper,
  ResponsiveImg,
};
