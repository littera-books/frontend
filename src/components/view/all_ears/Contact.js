import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendEmail } from '../../../reducers/reducer.email';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet';
import FormField from '../../../form/FormField';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

class Contact extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  async onSubmit(payload) {
    const { send } = this.props;
    await send(payload);

    const { error, history } = this.props;
    if (!error) {
      history.replace(domainConfig.main.path);
    }
  }

  render() {
    const { handleSubmit, error, match } = this.props;
    return (
      <Wrapper.BasicBlockWrapper>
        <Helmet pageTitle={domainConfig.contact.title} path={match.url} />
        <Element.BasicTitle size="0.75rem">
          {dataConfig.sendEmailText}
        </Element.BasicTitle>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <FormField.SendEmailFormField error={error} />
          <Element.SubmitButton type="submit">Submit</Element.SubmitButton>
        </form>
      </Wrapper.BasicBlockWrapper>
    );
  }
}

Contact.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
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
  )(Contact),
);
