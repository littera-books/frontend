import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readToken, retrieveInfo } from '../../../reducers/reducer.user';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './MyInfo.styled';

class MyInfo extends React.Component {
  state = {
    userId: 0,
  };

  componentDidMount() {
    const { read } = this.props;
    read();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userId !== prevState.userId) {
      nextProps.retrieve(nextProps.userId);
      return { userId: nextProps.userId };
    }
    return null;
  }

  render() {
    const {
      firstName, lastName, address, phone, email,
    } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="My Info" />
        <Styled.InfoWrapper>
          <Wrapper.BetweenWrapper>
            <p>{firstName}</p>
            <p>{lastName}</p>
          </Wrapper.BetweenWrapper>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
          <Link
            to="/my-info/manage"
            style={{
              marginTop: '1rem',
              marginLeft: 'auto',
            }}
          >
            Manage My Info
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
  retrieve: userId => dispatch(retrieveInfo(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyInfo);
