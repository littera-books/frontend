import styled from 'styled-components';
import Wrapper from '../../styled_base/Wrapper';

const AbsoluteWrapper = styled.div`
  position: absolute;
  font-size: 10px;
  text-align: left;
  letter-spacing: -0.3px;
`;

const InfoWrapper = styled(Wrapper.BetweenWrapper).attrs({
  id: 'info',
})`
  display: none;

  &.is-open {
    display: flex;
    margin-top: 0.5rem;
  }
`;

const InfoUL = styled.ul`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default {
  AbsoluteWrapper,
  InfoWrapper,
  InfoUL,
};
