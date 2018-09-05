import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  margin-bottom: 3rem;
  width: 10rem;
`;

const CardWrapper = styled.div`
  margin: 1rem;
  max-width: 13rem;
`;

const SectionImg = styled.img`
  width: 100%;
  height: auto;
`;

export default {
  MainWrapper,
  TitleWrapper,
  CardWrapper,
  SectionImg,
};
