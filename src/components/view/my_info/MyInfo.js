import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readToken } from '../../../reducers/reducer.user';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import StyledBase from '../../../styled/Base';
import Styled from './MyInfo.styled';

class MyInfo extends React.Component {
  componentDidMount() {
    const { read } = this.props;
    read();
  }

  render() {
    const {
      firstName, lastName, address, phone, email,
    } = this.props;
    return (
      <StyledBase.FlexWrapper>
        <Helmet pageTitle="My Info" />
        <Styled.InfoWrapper>
          <Styled.NameWrapper>
            <Styled.InfoField>{firstName}</Styled.InfoField>
            <Styled.InfoField>{lastName}</Styled.InfoField>
          </Styled.NameWrapper>
          <Styled.InfoField>{email}</Styled.InfoField>
          <Styled.InfoField>{phone}</Styled.InfoField>
          <Styled.InfoField>{address}</Styled.InfoField>
          <Link to="/my-info/manage">
            <Styled.AlignRightButton>Manage My Info</Styled.AlignRightButton>
          </Link>
        </Styled.InfoWrapper>
      </StyledBase.FlexWrapper>
    );
  }
}

MyInfo.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyInfo);
