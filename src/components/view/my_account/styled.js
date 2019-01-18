import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const InfoWrapper = styled(Wrapper.ColumnWrapper)`
  width: 20rem;

  @media (max-width: ${Element.MEDIA.mobileWidth}) {
    width: 18rem;
    margin: 0 1rem;
  }
`;

const FieldParagraph = styled.p`
  margin: 1rem 0;
`;

const NameParagraph = styled(FieldParagraph)`
  width: 10rem;
`;

export default {
  InfoWrapper,
  FieldParagraph,
  NameParagraph,
};
