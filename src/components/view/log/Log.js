import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readToken, retrieveInfo } from '../../../reducers/reducer.user';
import { signOut } from '../../../reducers/reducer.auth';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './Log.styled';

import ArrowDown from '../../../assets/images/down-arrow.svg';

const handleCick = () => {
  const DropdownContent = document.getElementById('dropdown-content');
  DropdownContent.classList.toggle('active');
};

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.handleCick = this.handleCick.bind(this);
  }

  async componentDidMount() {
    const { read, retrieve } = this.props;
    await read();
    const { userId } = this.props;
    await retrieve(userId);
  }

  handleCick() {
    const { logOut, history } = this.props;
    logOut();
    history.replace('/main');
  }

  render() {
    const { email } = this.props;
    const splitEmail = email.split('@');
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Log" />
        <Styled.Dropdown onClick={handleCick}>
          <Styled.DropdownTitle>
            <span>
              {`Hello, ${splitEmail[0]}`}
              &nbsp; &nbsp;
            </span>
            <img src={ArrowDown} width="16px" height="16px" alt="arrow-down" />
          </Styled.DropdownTitle>
          <Styled.DropdownContent id="dropdown-content">
            <Link to="/my-info">
              <Styled.DropdownItem>My Account</Styled.DropdownItem>
            </Link>
            <Link to="/my-info">
              <Styled.DropdownItem>My Order</Styled.DropdownItem>
            </Link>
            <Link to="/survey">
              <Styled.DropdownItem>My Enquiry</Styled.DropdownItem>
            </Link>
            <Link to="/my-info/resign">
              <Styled.DropdownItem>Resign</Styled.DropdownItem>
            </Link>
            <Styled.DropdownHr />
            <Styled.DropdownItem onClick={this.handleCick}>
              SIGN OUT
            </Styled.DropdownItem>
          </Styled.DropdownContent>
        </Styled.Dropdown>
      </Wrapper.FlexWrapper>
    );
  }
}

Log.propTypes = {
  email: PropTypes.string.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  read: PropTypes.func.isRequired,
  retrieve: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  email: state.user.email,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  retrieve: userId => dispatch(retrieveInfo(userId)),
  logOut: () => dispatch(signOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Log);
