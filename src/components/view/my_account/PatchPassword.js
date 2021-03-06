import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { patchPassword } from '../../../reducers/reducer.user';
import domainConfig from '../../../config/domainConfig';

// Components
import FormField from '../../../form/FormField';
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

class PatchPassword extends React.Component {
  componentDidMount() {
    const { initialize, history, userId } = this.props;

    if (!userId) {
      history.replace(domainConfig.myAccount.path);
    }

    initialize({
      userId,
    });
  }

  async onSubmit(payload) {
    const { patch, history } = this.props;
    await patch(payload);
    history.replace(domainConfig.myAccount.path);
  }

  render() {
    const { handleSubmit, match } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.PatchPassword.title} path={match.url} />
        <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <FormField.PasswordField />
          <Element.SubmitButton type="submit">
            Reset Password
          </Element.SubmitButton>
        </form>
      </Wrapper.FlexWrapper>
    );
  }
}

PatchPassword.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  patch: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
});

const mapDispatchToProps = dispatch => ({
  patch: payload => dispatch(patchPassword(payload)),
});

const validate = (values) => {
  const errors = {};
  if (values.password1 !== values.password2) {
    errors.password2 = 'Please check your password.';
  }
  return errors;
};

export default reduxForm({
  form: 'PatchPasswordForm',
  validate,
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PatchPassword),
);
