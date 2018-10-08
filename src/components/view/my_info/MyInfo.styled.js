import styled from 'styled-components';
import StyledBase from '../../../styled/Base';

const InfoWrapper = styled(StyledBase.ColumnWrapper)`
  width: 20rem;
  padding: 1rem;
`;

const NameWrapper = styled(StyledBase.BasicFlexWrapper)`
  justify-content: space-between;
`;

const InfoField = styled.p`
  line-height: 3;
`;

const ManageInput = styled(StyledBase.BasicInput)`
  line-height: 3;
`;

const AlignRightButton = styled(StyledBase.BasicButton)`
  margin-top: 1rem;
  margin-left: auto;
`;

const ButtonGroup = styled(StyledBase.BasicFlexWrapper)`
  justify-content: space-between;
  margin: 1rem 0;
`;

export default {
  InfoWrapper,
  NameWrapper,
  InfoField,
  ManageInput,
  AlignRightButton,
  ButtonGroup,
};
