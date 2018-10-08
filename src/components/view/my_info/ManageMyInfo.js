import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { readToken } from '../../../reducers/reducer.user';

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
      firstName,
      lastName,
      address,
      phone,
      email,
    } = this.props;
    read();
    initialize({
      first_name: firstName,
      last_name: lastName,
      address,
      phone,
      email,
    });
  }

  onSubmit(payload) {
    console.log(payload);
    console.log(this);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <StyledBase.FlexWrapper>
        <Helmet pageTitle="Manage My Info" />
        <Styled.InfoWrapper>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Styled.NameWrapper>
              <Field type="text" name="first_name" component={FormField} />
              <Field type="text" name="last_name" component={FormField} />
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
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  address: state.user.address,
  phone: state.user.phone,
  email: state.user.email,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
});

export default reduxForm({
  form: 'ManageMyInfoForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ManageMyInfo),
);
