import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../../reducers/reducer.user';

// Component
import { MinimalFormField, PasswordField } from '../../../form/InfoFormField';
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './Survey.styled';

const AddInfoForm = ({ handleSubmit, onSubmit, error }) => (
  <Styled.LineHeightForm
    action="post"
    onSubmit={handleSubmit(onSubmit.bind(this))}
  >
    <MinimalFormField error={error} />
    <PasswordField />
    <Element.SubmitButton type="submit">Register</Element.SubmitButton>
  </Styled.LineHeightForm>
);

class AddInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  async onSubmit(payload) {
    const { create } = this.props;
    await create(payload);

    const { error, history } = this.props;
    if (!error) {
      history.replace('/sign-in');
    }
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  openPostCode() {
    const { postCode } = this.state;
    postCode.open();
  }

  render() {
    const { width } = this.state;
    const { handleSubmit, error, history } = this.props;

    if (width > 414) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet pageTitle="Add Info" />
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

    return (
      <Styled.ScrollFlexWrapper>
        <Helmet pageTitle="Add Info" />
        <Wrapper.ColumnWrapper>
          <AddInfoForm
            handleSubmit={handleSubmit}
            onSubmit={this.onSubmit}
            error={error}
            history={history}
          />
        </Wrapper.ColumnWrapper>
      </Styled.ScrollFlexWrapper>
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

AddInfo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  error: PropTypes.string.isRequired,
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
  )(AddInfo),
);
