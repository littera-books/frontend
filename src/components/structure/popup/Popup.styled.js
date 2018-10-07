import styled from 'styled-components';
import StyledBase from '../../../styled/Base';

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupWrapper = styled.div`
  width: 32rem;
  height: 20rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const PopupHeader = styled.div`
  line-height: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PopupCloseButton = styled(StyledBase.BasicButton)`
  font-size: 1.5rem;
  border: none;
  padding: 0;
`;

const PopupBody = styled.div`
  margin: 1rem 0;
  height: 13rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

const PopupFooter = styled.div`
  line-height: 1;
  display: flex;
  justify-content: flex-end;
`;

const PopupChoiceButton = styled(StyledBase.BasicButton)`
  font-size: 1rem;
  border: none;
  margin-left: 1rem;
`;

export default {
  PopupBackground,
  PopupWrapper,
  PopupHeader,
  PopupCloseButton,
  PopupBody,
  PopupFooter,
  PopupChoiceButton,
};
