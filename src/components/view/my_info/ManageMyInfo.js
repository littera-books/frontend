import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { readToken, updateInfo } from '../../../reducers/reducer.user';

// Components
import Helmet from '../../helmet/Helmet';
import FormField from './FormField';

// Styled
import StyledBase from '../../../styled/Base';
import Styled from './MyInfo.styled';

class ManageMyInfo extends React.Component {
  componentDidMount() {
    const {
      read,
      initialize,
      userId,
      firstName,
      lastName,
      address,
      phone,
      email,
    } = this.props;
    read();
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
    const { update } = this.props;
    console.log(payload);
    await update(payload);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <StyledBase.FlexWrapper>
        <Helmet pageTitle="Manage My Info" />
        <Styled.InfoWrapper>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Styled.NameWrapper>
              <Field type="text" name="firstName" component={FormField} />
              <Field type="text" name="lastName" component={FormField} />
            </Styled.NameWrapper>
            <Field type="text" name="email" component={FormField} />
            <Field type="text" name="phone" component={FormField} />
            <Field type="text" name="address" component={FormField} />
            <Styled.ButtonGroup>
              <StyledBase.BasicButton type="button">
                Resign
              </StyledBase.BasicButton>
              <StyledBase.BasicButton type="submit">
                Confirm Change
              </StyledBase.BasicButton>
            </Styled.ButtonGroup>
          </form>
        </Styled.InfoWrapper>
      </StyledBase.FlexWrapper>
    );
  }
}

ManageMyInfo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  read: PropTypes.func.isRequired,
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
  read: () => dispatch(readToken()),
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
