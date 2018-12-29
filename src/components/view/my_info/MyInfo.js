import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readToken, retrieveInfo } from '../../../reducers/reducer.user';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './MyInfo.styled';

class MyInfo extends React.Component {
  async componentDidMount() {
    const { read, retrieve } = this.props;
    await read();
    const { userId } = this.props;
    await retrieve(userId);
  }

  render() {
    const {
      firstName,
      lastName,
      address,
      extraAddress,
      phone,
      email,
    } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="My Info" />
        <Styled.InfoWrapper>
          <p>{email}</p>
          <Styled.NameWrapper>
            <Styled.NameParagraph>{firstName}</Styled.NameParagraph>
            <Styled.NameParagraph>{lastName}</Styled.NameParagraph>
          </Styled.NameWrapper>
          <p>{phone}</p>
          <p>{address}</p>
          <p>{extraAddress}</p>
          <Link to="/my-info/manage">
            <Element.SubmitButton>Manage My Info</Element.SubmitButton>
          </Link>
        </Styled.InfoWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

MyInfo.propTypes = {
  read: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  extraAddress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  address: state.user.address,
  extraAddress: state.user.extraAddress,
  phone: state.user.phone,
  email: state.user.email,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  retrieve: userId => dispatch(retrieveInfo(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyInfo);
