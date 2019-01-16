import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateInfo } from '../../../reducers/reducer.user';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';

// Components
import FormField from '../../../form/FormField';
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './styled';

const ManageMyInfoForm = ({
  handleSubmit, onSubmit, openPostCode, error,
}) => (
  <Styled.LineHeightForm
    action="post"
    onSubmit={handleSubmit(onSubmit.bind(this))}
  >
    <FormField.InfoFormField error={error} openPostCode={openPostCode} />
    <Link to={domainConfig.PatchPassword.path}>Patch Password</Link>
    <Element.SubmitButton type="submit">Confirm Change</Element.SubmitButton>
  </Styled.LineHeightForm>
);

class ManageMyAccount extends React.Component {
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
      extraAddress,
      phone,
      email,
      history,
    } = this.props;

    if (!userId) {
      history.replace(domainConfig.myAccount.path);
    }

    initialize({
      userId,
      firstName,
      lastName,
      address,
      extraAddress,
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
      history.replace(domainConfig.myAccount.path);
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
          const extraAddress = document.getElementById('extra-address');
          extraAddress.focus();
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
    const { handleSubmit, error, match } = this.props;

    if (width > 414) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet
            pageTitle={domainConfig.manageMyAccount.title}
            path={match.url}
          />
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
        <Helmet pageTitle={domainConfig.manageMyAccount.title} />
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

ManageMyAccount.propTypes = {
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
  extraAddress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  address: state.user.address,
  extraAddress: state.user.extraAddress,
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
  )(ManageMyAccount),
);
