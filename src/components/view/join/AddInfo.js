import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../../reducers/reducer.user';
import { postResult } from '../../../reducers/reducer.question';
import { setPopupHeaderMessage } from '../../../reducers/reducer.popup';
import dataConfig from '../../../dataConfig';

// Component
import Loadable from '../../../loadable';
import BasicFormField from '../../../form/FormField';
import Validation from '../../../form/Validation';
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './Survey.styled';
import FormField from './FormField';

class AddInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popupFilter: false,
      postCode: '',
    };

    this.openPostCode = this.openPostCode.bind(this);
  }

  componentDidMount() {
    const { result, history } = this.props;
    if (Object.keys(result).length === 0) {
      alert(
        '설문 정보가 손실되었습니다. 가입 절차를 다시 진행해주시기 바랍니다.',
      );
      history.push('/survey');
    } else {
      const script = document.createElement('script');
      script.id = 'daum';
      document.head.appendChild(script);
      script.src = dataConfig.daumPostApiUrl;
      script.onload = () => this.initialPostCode(this);
    }
  }

  async onSubmit(payload) {
    const { create } = this.props;
    await create(payload);

    const {
      error, result, post, setPopup, userId,
    } = this.props;
    if (!error) {
      post(userId, result);
      setPopup(dataConfig.popupMessage.signUp);
      this.setState({ popupFilter: true });
    }
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
    const { popupFilter } = this.state;
    const { handleSubmit, history, error } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Add Info" />
        <Wrapper.ColumnWrapper>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Wrapper.BetweenWrapper>
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
                validate={[Validation.required, Validation.maxLength20]}
              />
            </Wrapper.BetweenWrapper>
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
              component={FormField.LongPlaceholderFormField}
              validate={Validation.required}
            />
            <Styled.SmallButton type="button" onClick={this.openPostCode}>
              우편번호 찾기
            </Styled.SmallButton>
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
            <div>
              <Element.BasicSmall>{error}</Element.BasicSmall>
            </div>
            <Styled.AlignRightButton type="submit">
              Register
            </Styled.AlignRightButton>
          </form>
        </Wrapper.ColumnWrapper>
        {popupFilter ? (
          <Loadable.SimplePopup
            replace={history.replace}
            destination="/sign-in"
          />
        ) : null}
      </Wrapper.FlexWrapper>
    );
  }
}

AddInfo.propTypes = {
  change: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  result: PropTypes.objectOf(PropTypes.string).isRequired,
  create: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  post: PropTypes.func.isRequired,
  setPopup: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  result: state.question.result,
  userId: state.user.userId,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  create: payload => dispatch(createUser(payload)),
  post: (userId, payload) => dispatch(postResult(userId, payload)),
  setPopup: payload => dispatch(setPopupHeaderMessage(payload)),
});

const validate = (values) => {
  const errors = {};
  if (values.password1 !== values.password2) {
    errors.password2 = 'Password is not correct';
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
