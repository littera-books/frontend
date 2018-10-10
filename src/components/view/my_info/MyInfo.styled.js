import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const InfoWrapper = styled(Wrapper.ColumnWrapper)`
  width: 20rem;
  padding: 1rem;
`;

const NameWrapper = styled(Wrapper.BasicFlexWrapper)`
  justify-content: space-between;
`;

const InfoField = styled.p`
  line-height: 3;
`;

const ManageInput = styled(Element.BasicInput)`
  line-height: 3;
`;

const AlignRightButton = styled(Element.BasicButton)`
  margin-top: 1rem;
  margin-left: auto;
`;

const ButtonGroup = styled(Wrapper.BasicFlexWrapper)`
  justify-content: space-between;
  margin: 1rem 0;
`;

const QuillEditor = styled.div`
  .ql-editor {
    font-family: 'Silk Remington', 'Nanum Myeongjo';
    font-size: 1rem;
    line-height: 2;
    margin-bottom: 1rem;
  }
`;

export default {
  InfoWrapper,
  NameWrapper,
  InfoField,
  ManageInput,
  AlignRightButton,
  ButtonGroup,
  QuillEditor,
};
