import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initializePopup } from '../../../reducers/reducer.popup';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './Popup.styled';

class SimplePopup extends React.Component {
  constructor(props) {
    super(props);

    this.closePopup = this.closePopup.bind(this);
  }

  closePopup() {
    const { initialize, replace, destination } = this.props;
    initialize();
    replace(destination);
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
            <Element.BasicButton type="button" onClick={this.closePopup}>
              <strong>&times;</strong>
            </Element.BasicButton>
          </Styled.PopupHeader>
          <Styled.PopupBody>
            <p>{message}</p>
          </Styled.PopupBody>
          <Styled.PopupFooter>
            <Styled.PopupChoiceButton type="button" onClick={this.closePopup}>
              Close
            </Styled.PopupChoiceButton>
          </Styled.PopupFooter>
        </Styled.PopupWrapper>
      </Styled.PopupBackground>
    );
  }
}

SimplePopup.propTypes = {
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  initialize: PropTypes.func.isRequired,
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
)(SimplePopup);
