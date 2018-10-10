import styled from 'styled-components';
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

const PopupBackground = styled(Wrapper.BasicFlexWrapper)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

const PopupWrapper = styled(Wrapper.BasicBlockWrapper)`
  width: 32rem;
  height: 20rem;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const PopupHeader = styled(Wrapper.BasicFlexWrapper)`
  line-height: 1;
  justify-content: space-between;
  align-items: center;
`;

const PopupBody = styled(Wrapper.ColumnWrapper)`
  margin: 1rem 0;
  height: 13rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: center;
`;

const PopupFooter = styled(Wrapper.BasicFlexWrapper)`
  line-height: 1;
  justify-content: flex-end;
`;

const PopupChoiceButton = styled(Element.BasicButton)`
  margin-left: 1rem;
`;

export default {
  PopupBackground,
  PopupWrapper,
  PopupHeader,
  PopupBody,
  PopupFooter,
  PopupChoiceButton,
};
