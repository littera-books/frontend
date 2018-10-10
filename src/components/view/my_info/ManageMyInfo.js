import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateInfo } from '../../../reducers/reducer.user';

// Components
import BasicFormField from '../../../form/FormField';
import Validation from '../../../form/Validation';
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './MyInfo.styled';

class ManageMyInfo extends React.Component {
  componentDidMount() {
    const {
      initialize,
      userId,
      firstName,
      lastName,
      address,
      phone,
      email,
    } = this.props;
    initialize({
      userId,
      firstName,
      lastName,
      address,
      phone,
      email,
    });
  }

  async onSubmit(payload) {
    const { update, history } = this.props;
    await update(payload);
    history.replace('/my-info');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Manage My Info" />
        <Styled.InfoWrapper>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Wrapper.BetweenWrapper>
              <Field
                type="text"
                name="firstName"
                component={BasicFormField.BasicFormField}
                validate={[Validation.required, Validation.maxLength20]}
              />
              <Field
                type="text"
                name="lastName"
                component={BasicFormField.BasicFormField}
              />
            </Wrapper.BetweenWrapper>
            <Field
              type="email"
              name="email"
              component={BasicFormField.BasicFormField}
              validate={[Validation.required, Validation.email]}
            />
            <Field
              type="tel"
              name="phone"
              component={BasicFormField.BasicFormField}
              validate={[
                Validation.required,
                Validation.maxLength20,
                Validation.number,
              ]}
            />
            <Field
              type="text"
              name="address"
              component={BasicFormField.BasicFormField}
              validate={Validation.required}
            />
            <Styled.ButtonGroup>
              <Link to="/my-info/patch-password">Patch Password</Link>
            </Styled.ButtonGroup>
            <Styled.ButtonGroup>
              <Link to="/my-info/resign">Resign</Link>
              <Element.BasicButton type="submit">
                Confirm Change
              </Element.BasicButton>
            </Styled.ButtonGroup>
          </form>
        </Styled.InfoWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

ManageMyInfo.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  address: state.user.address,
  phone: state.user.phone,
  email: state.user.email,
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
