import styled from 'styled-components';
import Wrapper from '../../../../styled_base/Wrapper';

const LineHeightForm = styled.form`
  line-height: 5;

  @media (max-width: 375px) {
    margin: 0 1.5rem;
  }

  @media (max-width: 320px) {
    line-height: 4;
    font-size: 0.5rem;

    input {
      width: 17rem;
      font-size: 0.5rem;
    }

    button {
      font-size: 0.5rem;
    }
  }
`;

const ButtonGroup = styled(Wrapper.BetweenWrapper)`
  margin: 1rem 0;
`;

export default {
  LineHeightForm,
  ButtonGroup,
};
