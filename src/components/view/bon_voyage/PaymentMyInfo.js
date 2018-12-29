import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  readToken,
  retrieveInfo,
  updateInfo,
} from '../../../reducers/reducer.user';
import dataConfig from '../../../dataConfig';

// Components
import FormField from '../../../form/FormField';

// Styled
import Element from '../../../styled_base/Element';

class PaymentMyInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postCode: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.openPostCode = this.openPostCode.bind(this);
  }

  async componentDidMount() {
    const { read, retrieve } = this.props;
    await read();

    const { userId } = this.props;
    await retrieve(userId);

    const script = document.createElement('script');
    script.id = 'daum';
    document.head.appendChild(script);
    script.src = dataConfig.daumPostApiUrl;
    script.onload = () => this.initialPostCode(this);

    const {
      initialize,
      firstName,
      lastName,
      address,
      extraAddress,
      phone,
    } = this.props;

    initialize({
      userId,
      firstName,
      lastName,
      address,
      extraAddress,
      phone,
    });
  }

  async onSubmit(payload) {
    const { update } = this.props;
    await update(payload);

    const { error, retrieve, userId } = this.props;
    if (!error) {
      await retrieve(userId);

      const {
        initialize,
        firstName,
        lastName,
        address,
        extraAddress,
        phone,
      } = this.props;
      await initialize({
        userId,
        firstName,
        lastName,
        address,
        extraAddress,
        phone,
      });
    }
  }

  initialPostCode() {
    const { change } = this.props;
    window.daum.postcode.load(() => {
      const postCode = new window.daum.Postcode({
        oncomplete: function oncomplete(data) {
          change('address', `(${data.zonecode}) ${data.address}`);
          alert('나머지 주소를 적어주세요');
          const extraAddress = document.querySelectorAll(
            'input[name=extraAddress]',
          );
          extraAddress[0].focus();
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
    const { handleSubmit, error } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <FormField.PaymentFormField
          error={error}
          openPostCode={this.openPostCode}
        >
          <Element.SubmitButton type="submit" width="20rem">
            Update
          </Element.SubmitButton>
        </FormField.PaymentFormField>
      </form>
    );
  }
}

PaymentMyInfo.propTypes = {
  change: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  extraAddress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  address: state.user.address,
  extraAddress: state.user.extraAddress,
  phone: state.user.phone,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  update: payload => dispatch(updateInfo(payload)),
  retrieve: userId => dispatch(retrieveInfo(userId)),
});

export default reduxForm({
  form: 'PaymentMyInfoForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PaymentMyInfo),
);
