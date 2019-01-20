import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readToken, retrieveInfo } from '../../../reducers/reducer.user';
import { signOut } from '../../../reducers/reducer.auth';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './styled';

import ArrowDown from '../../../assets/images/down-arrow.svg';

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
  }

  async componentDidMount() {
    const { read, retrieve } = this.props;
    await read();
    const { userId } = this.props;
    await retrieve(userId);
  }

  onSignOut() {
    const { logOut, history } = this.props;
    logOut();
    history.replace(domainConfig.main.path);
  }

  render() {
    const { email, match } = this.props;
    const splitEmail = email.split('@');
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.log.title} path={match.url} />
        <Styled.Dropdown>
          <Styled.DropdownTitle>
            <span>
              {`Hello, ${splitEmail[0]}`}
              &nbsp; &nbsp;
            </span>
            <img src={ArrowDown} width="16px" height="16px" alt="arrow-down" />
          </Styled.DropdownTitle>
          <Styled.DropdownContent id="dropdown-content">
            <Link to={domainConfig.myAccount.path}>
              <Styled.DropdownItem>My Account</Styled.DropdownItem>
            </Link>
            <Link to={domainConfig.myOrder.path}>
              <Styled.DropdownItem>My Order</Styled.DropdownItem>
            </Link>
            <Link to={domainConfig.myEnquiry.path}>
              <Styled.DropdownItem>My Enquiry</Styled.DropdownItem>
            </Link>
            <Link to={domainConfig.resign.path}>
              <Styled.DropdownItem>Resign</Styled.DropdownItem>
            </Link>
            <Styled.DropdownHr />
            <Link to={domainConfig.signOut.path} onClick={this.onSignOut}>
              <Styled.DropdownItem>SIGN OUT</Styled.DropdownItem>
            </Link>
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
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
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
