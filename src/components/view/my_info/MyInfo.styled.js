import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const InfoWrapper = styled(Wrapper.ColumnWrapper)`
  width: 20rem;
  margin: 1rem;
`;

const ButtonGroup = styled(Wrapper.BetweenWrapper)`
  margin: 1rem 0;
`;

const AlignRightButton = styled(Element.BasicButton)`
  margin-top: 1rem;
  margin-left: auto;
`;

export default {
  InfoWrapper,
  AlignRightButton,
  ButtonGroup,
};
