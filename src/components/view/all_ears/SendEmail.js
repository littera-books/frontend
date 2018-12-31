import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendEmail } from '../../../reducers/reducer.email';
import dataConfig from '../../../dataConfig';

// Components
import Helmet from '../../helmet/Helmet';
import FormField from '../../../form/FormField';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

class SendEmail extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  async onSubmit(payload) {
    const { send } = this.props;
    await send(payload);

    const { error, history } = this.props;
    if (!error) {
      history.replace('/main');
    }
  }

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <Wrapper.BasicBlockWrapper>
        <Helmet pageTitle="Send Email" />
        <Element.BasicTitle>{dataConfig.sendEmailText}</Element.BasicTitle>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <FormField.SendEmailFormField error={error} />
          <Element.SubmitButton type="submit">Submit</Element.SubmitButton>
        </form>
      </Wrapper.BasicBlockWrapper>
    );
  }
}

SendEmail.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  error: state.email.error,
});

const mapDispatchToProps = dispatch => ({
  send: payload => dispatch(sendEmail(payload)),
});

export default reduxForm({
  form: 'SendEmailForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SendEmail),
);
