import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../../../reducers/reducer.user';
import domainConfig from '../../../../config/domainConfig';

// Component
import FormField from '../../../../form/FormField';
import Helmet from '../../../helmet';

// Styled
import Wrapper from '../../../../styled_base/Wrapper';
import Element from '../../../../styled_base/Element';
import Styled from './styled';

const AddInfoForm = ({ handleSubmit, onSubmit, error }) => (
  <Styled.LineHeightForm
    action="post"
    onSubmit={handleSubmit(onSubmit.bind(this))}
  >
    <FormField.EmailField error={error} />
    <FormField.PasswordField />
    <Element.SubmitButton type="submit">Register</Element.SubmitButton>
  </Styled.LineHeightForm>
);

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(payload) {
    const { create } = this.props;
    await create(payload);

    const { error, history } = this.props;
    if (!error) {
      history.replace(domainConfig.signUpComplete.path);
    }
  }

  openPostCode() {
    const { postCode } = this.state;
    postCode.open();
  }

  render() {
    const {
      handleSubmit, error, history, match,
    } = this.props;

    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.signUp.title} path={match.url} />
        <Wrapper.BasicBlockWrapper>
          <Element.BasicTitle
            align="center"
            size="3rem"
            fontFamily="'Gothic A1', sans-serif"
          >
            Sign up
          </Element.BasicTitle>
          <AddInfoForm
            handleSubmit={handleSubmit}
            onSubmit={this.onSubmit}
            error={error}
            history={history}
          />
        </Wrapper.BasicBlockWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

AddInfoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  error: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  result: state.question.result,
  userId: state.user.userId,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  create: payload => dispatch(createUser(payload)),
});

const validate = (values) => {
  const errors = {};
  if (values.password1 !== values.password2) {
    errors.password2 = 'Please check your password.';
  }
  return errors;
};

export default reduxForm({
  form: 'AddInfoForm',
  validate,
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignUp),
);
