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
import Helmet from '../../helmet/Helmet';

// Stylec
import Wrapper from '../../../styled_base/Wrapper';
import BasicFormField from '../../../styled_base/FormField';
import Styled from './Survey.styled';
import FormField from './FormField';

class AddInfo extends React.Component {
  state = {
    popupFilter: false,
  };

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

  render() {
    const { popupFilter } = this.state;
    const { handleSubmit, history } = this.props;
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
              />
              <Field
                type="text"
                name="lastName"
                placeholder="last name"
                component={BasicFormField.PlaceholderFormField}
              />
            </Wrapper.BetweenWrapper>
            <Field
              type="email"
              name="email"
              placeholder="E-mail address (your identification)"
              component={FormField.LongPlaceholderFormField}
            />
            <Field
              type="tel"
              name="phone"
              placeholder="Contact No."
              component={FormField.LongPlaceholderFormField}
            />
            <Field
              type="text"
              name="address"
              placeholder="Contact Address (Where your books arrive)"
              component={FormField.LongPlaceholderFormField}
            />
            <Field
              type="password"
              name="password1"
              placeholder="Password (With 8 characters or more)"
              component={FormField.LongPlaceholderFormField}
            />
            <Field
              type="password"
              name="password2"
              placeholder="Confirm password"
              component={FormField.LongPlaceholderFormField}
            />
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
  handleSubmit: PropTypes.func.isRequired,
  result: PropTypes.objectOf(PropTypes.string).isRequired,
  create: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  post: PropTypes.func.isRequired,
  setPopup: PropTypes.func.isRequired,
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

export default reduxForm({
  form: 'AddInfoForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddInfo),
);
