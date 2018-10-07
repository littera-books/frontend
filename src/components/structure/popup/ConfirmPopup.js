import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initializePopup } from '../../../reducers/reducer.popup';

// Styled
import Styled from './Popup.styled';

class ConfirmPopup extends React.Component {
  constructor(props) {
    super(props);

    this.cancelPopup = this.cancelPopup.bind(this);
    this.confirmPopup = this.confirmPopup.bind(this);
  }

  cancelPopup() {
    const { initialize } = this.props;
    initialize();
  }

  async confirmPopup() {
    const {
      initialize, method, argument, replace, destination,
    } = this.props;

    await method(argument);
    initialize();
    replace(destination);
    window.location.reload();
  }

  render() {
    const { header, message } = this.props;

    return (
      <Styled.PopupBackground>
        <Styled.PopupWrapper>
          <Styled.PopupHeader>
            <h3>
              <strong>{header}</strong>
            </h3>
            <Styled.PopupCloseButton type="button" onClick={this.cancelPopup}>
              <strong>&times;</strong>
              &nbsp;
            </Styled.PopupCloseButton>
          </Styled.PopupHeader>
          <Styled.PopupBody>
            <p>{message}</p>
          </Styled.PopupBody>
          <Styled.PopupFooter>
            <Styled.PopupChoiceButton type="button" onClick={this.cancelPopup}>
              Cancel
            </Styled.PopupChoiceButton>
            <Styled.PopupChoiceButton type="button" onClick={this.confirmPopup}>
              Confirm
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
  initialize: PropTypes.func.isRequired,
  method: PropTypes.func.isRequired,
  argument: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  replace: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  header: state.popup.header,
  message: state.popup.message,
});

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(initializePopup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmPopup);
