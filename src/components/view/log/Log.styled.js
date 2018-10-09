import styled from 'styled-components';

const SectionItem = styled.div`
  position: relative;
  margin: 1rem 0;
  width: 15rem;
  text-align: center;

  @media (max-width: 414px) {
    height: calc(100vh - 15.75rem);

    a {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%);
    }
  }

  @media (max-width: 375px) {
    height: calc(100vh - 12rem);

    a {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%);
    }
  }
`;

export default {
  SectionItem,
};
