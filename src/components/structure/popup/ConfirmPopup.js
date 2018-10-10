import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initializePopup } from '../../../reducers/reducer.popup';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './Popup.styled';

class ConfirmPopup extends React.Component {
  constructor(props) {
    super(props);

    this.confirmPopup = this.confirmPopup.bind(this);
  }

  async confirmPopup() {
    const {
      initialize, method, argument, replace, destination,
    } = this.props;

    await method(argument);

    const { error } = this.props;
    if (!error) {
      initialize();
      replace(destination);
    }
  }

  render() {
    const {
      header, message, confirm, cancel, error, cancelPopup,
    } = this.props;

    return (
      <Styled.PopupBackground>
        <Styled.PopupWrapper>
          <Styled.PopupHeader>
            <h3>
              <strong>{header}</strong>
            </h3>
            <Element.BasicButton type="button" onClick={cancelPopup}>
              <strong>&times;</strong>
            </Element.BasicButton>
          </Styled.PopupHeader>
          <Styled.PopupBody>
            <p>{message}</p>
            <div>
              <Element.BasicSmall>{error}</Element.BasicSmall>
            </div>
          </Styled.PopupBody>
          <Styled.PopupFooter>
            <Styled.PopupChoiceButton type="button" onClick={cancelPopup}>
              {cancel}
            </Styled.PopupChoiceButton>
            <Styled.PopupChoiceButton type="button" onClick={this.confirmPopup}>
              {confirm}
            </Styled.PopupChoiceButton>
          </Styled.PopupFooter>
        </Styled.PopupWrapper>
      </Styled.PopupBackground>
    );
  }
}

ConfirmPopup.propTypes = {
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  cancel: PropTypes.string.isRequired,
  initialize: PropTypes.func.isRequired,
  cancelPopup: PropTypes.func.isRequired,
  method: PropTypes.func.isRequired,
  argument: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  error: PropTypes.string.isRequired,
  replace: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  header: state.popup.header,
  message: state.popup.message,
  confirm: state.popup.confirm,
  cancel: state.popup.cancel,
});

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(initializePopup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmPopup);
