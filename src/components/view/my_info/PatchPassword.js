import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { patchPassword } from '../../../reducers/reducer.user';

// Components
import Validation from '../../../form/Validation';
import Helmet from '../../helmet/Helmet';
import FormField from '../join/FormField';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './MyInfo.styled';

class PatchPassword extends React.Component {
  componentDidMount() {
    const { initialize, userId } = this.props;
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
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              type="password"
              name="password1"
              placeholder="Password (With 8 characters or more)"
              component={FormField.LongPlaceholderFormField}
              validate={[Validation.required, Validation.minLength8]}
            />
            <Field
              type="password"
              name="password2"
              placeholder="Confirm password"
              component={FormField.LongPlaceholderFormField}
              validate={[Validation.required, Validation.minLength8]}
            />
            <Styled.AlignRightButton type="submit">
              Submit
            </Styled.AlignRightButton>
          </form>
        </Styled.InfoWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

PatchPassword.propTypes = {
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
    errors.password2 = 'Password is not correct';
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
