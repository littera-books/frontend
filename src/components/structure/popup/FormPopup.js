import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { initializePopup } from '../../../reducers/reducer.popup';
import { sendSubscription } from '../../../reducers/reducer.product';

// Components
import BasicFormField from '../../../form/FormField';
import Validation from '../../../form/Validation';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './Popup.styled';

class FormPopup extends React.Component {
  constructor(props) {
    super(props);

    this.confirmPopup = this.confirmPopup.bind(this);
  }

  componentDidMount() {
    const { initialize, userId } = this.props;
    initialize({
      userId,
    });
    const code = document.getElementById('code');
    code.focus();
  }

  async confirmPopup(payload) {
    const {
      init, replace, destination, send,
    } = this.props;

    await send(payload);

    const { error } = this.props;
    if (!error) {
      await init();
      await replace(destination);
    }
  }

  render() {
    const {
      handleSubmit,
      header,
      message,
      confirm,
      cancel,
      cancelPopup,
      error,
    } = this.props;

    return (
      <Styled.PopupBackground>
        <Styled.PopupWrapper>
          <form
            action="post"
            onSubmit={handleSubmit(this.confirmPopup.bind(this))}
          >
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
              <Field
                type="text"
                name="code"
                placeholder="Promotion Code"
                component={BasicFormField.BasicFormField}
                validate={Validation.required}
              />
              <div>
                <Element.BasicSmall>{error}</Element.BasicSmall>
              </div>
            </Styled.PopupBody>
            <Styled.PopupFooter>
              <Styled.PopupChoiceButton type="button" onClick={cancelPopup}>
                {cancel}
              </Styled.PopupChoiceButton>
              <Styled.PopupChoiceButton
                type="submit"
                onSubmit={this.confirmPopup}
              >
                {confirm}
              </Styled.PopupChoiceButton>
            </Styled.PopupFooter>
          </form>
        </Styled.PopupWrapper>
      </Styled.PopupBackground>
    );
  }
}

FormPopup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  cancel: PropTypes.string.isRequired,
  init: PropTypes.func.isRequired,
  cancelPopup: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  send: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  header: state.popup.header,
  message: state.popup.message,
  confirm: state.popup.confirm,
  cancel: state.popup.cancel,
  error: state.product.error,
});

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(initializePopup()),
  send: payload => dispatch(sendSubscription(payload)),
});

export default reduxForm({
  form: 'PromotionSubscriptionForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FormPopup),
);
