import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { patchPassword } from '../../../reducers/reducer.user';

// Components
import FormField from '../../../form/FormField';
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './MyInfo.styled';

class PatchPassword extends React.Component {
  componentDidMount() {
    const { initialize, history, userId } = this.props;

    if (!userId) {
      history.replace('/my-info');
    }

    initialize({
      userId,
    });
  }

  async onSubmit(payload) {
    const { patch, history } = this.props;
    await patch(payload);
    history.replace('/my-info');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Patch Password" />
        <Styled.InfoWrapper>
          <Styled.LineHeightForm
            action="post"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            <FormField.PasswordField />
            <Element.SubmitButton type="submit">Submit</Element.SubmitButton>
          </Styled.LineHeightForm>
        </Styled.InfoWrapper>
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
