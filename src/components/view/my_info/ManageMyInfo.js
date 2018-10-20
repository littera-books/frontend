import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateInfo } from '../../../reducers/reducer.user';
import dataConfig from '../../../dataConfig';

// Components
import BasicFormField from '../../../form/FormField';
import Validation from '../../../form/Validation';
import Helmet from '../../helmet/Helmet';
import FormField from './FormField';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './MyInfo.styled';

const ManageMyInfoForm = ({
  handleSubmit, onSubmit, openPostCode, error,
}) => (
  <Styled.LineHeightForm
    action="post"
    onSubmit={handleSubmit(onSubmit.bind(this))}
  >
    <Styled.NameWrapper>
      <Field
        type="text"
        name="firstName"
        placeholder="first name"
        component={BasicFormField.PlaceholderFormField}
        validate={[Validation.required, Validation.maxLength20]}
      />
      <Field
        type="text"
        name="lastName"
        placeholder="last name"
        component={BasicFormField.PlaceholderFormField}
      />
    </Styled.NameWrapper>
    <Field
      type="email"
      name="email"
      placeholder="E-mail address (your identification)"
      component={FormField.LongPlaceholderFormField}
      validate={[Validation.required, Validation.email]}
    />
    <Field
      type="tel"
      name="phone"
      placeholder="Contact No."
      component={FormField.LongPlaceholderFormField}
      validate={[
        Validation.required,
        Validation.maxLength11,
        Validation.number,
      ]}
    />
    <Field
      type="text"
      name="address"
      placeholder="Contact Address (Where your books arrive)"
      func={openPostCode}
      component={FormField.PostalCodeFormField}
      validate={Validation.required}
    />
    <div>
      <Element.BasicSmall>{error}</Element.BasicSmall>
    </div>
    <Link to="/my-info/patch-password">Patch Password</Link>
    <Wrapper.BetweenWrapper>
      <Link to="/my-info/resign">Resign</Link>
      <Element.BasicButton type="submit">Confirm Change</Element.BasicButton>
    </Wrapper.BetweenWrapper>
  </Styled.LineHeightForm>
);

class ManageMyInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      postCode: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.openPostCode = this.openPostCode.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    const script = document.createElement('script');
    script.id = 'daum';
    document.head.appendChild(script);
    script.src = dataConfig.daumPostApiUrl;
    script.onload = () => this.initialPostCode(this);

    const {
      initialize,
      userId,
      firstName,
      lastName,
      address,
      phone,
      email,
      history,
    } = this.props;

    if (!userId) {
      history.replace('/my-info');
    }

    initialize({
      userId,
      firstName,
      lastName,
      address,
      phone,
      email,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  async onSubmit(payload) {
    const { update, history } = this.props;
    await update(payload);

    const { error } = this.props;
    if (!error) {
      history.replace('/my-info');
    }
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  initialPostCode() {
    const { change } = this.props;
    window.daum.postcode.load(() => {
      const postCode = new window.daum.Postcode({
        oncomplete: function oncomplete(data) {
          change('address', `(${data.zonecode}) ${data.address}`);
          alert('나머지 주소를 적어주세요');
        },
      });
      this.setState({ postCode });
    });
  }

  openPostCode() {
    const { postCode } = this.state;
    postCode.open();
  }

  render() {
    const { width } = this.state;
    const { handleSubmit, error } = this.props;

    if (width > 414) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet pageTitle="Manage My Info" />
          <Wrapper.ColumnWrapper>
            <ManageMyInfoForm
              handleSubmit={handleSubmit}
              onSubmit={this.onSubmit}
              openPostCode={this.openPostCode}
              error={error}
            />
          </Wrapper.ColumnWrapper>
        </Wrapper.FlexWrapper>
      );
    }

    return (
      <Styled.ScrollFlexWrapper>
        <Helmet pageTitle="Manage My Info" />
        <Wrapper.ColumnWrapper>
          <ManageMyInfoForm
            handleSubmit={handleSubmit}
            onSubmit={this.onSubmit}
            openPostCode={this.openPostCode}
            error={error}
          />
        </Wrapper.ColumnWrapper>
      </Styled.ScrollFlexWrapper>
    );
  }
}

ManageMyInfoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  openPostCode: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

ManageMyInfo.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  change: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  address: state.user.address,
  phone: state.user.phone,
  email: state.user.email,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  update: payload => dispatch(updateInfo(payload)),
});

export default reduxForm({
  form: 'ManageMyInfoForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ManageMyInfo),
);
