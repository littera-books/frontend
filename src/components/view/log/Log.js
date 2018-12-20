import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readToken, retrieveInfo } from '../../../reducers/reducer.user';

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
  async componentDidMount() {
    const { read, retrieve } = this.props;
    await read();
    const { userId } = this.props;
    await retrieve(userId);
  }

  render() {
    const { email } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Log" />
        <Styled.Dropdown onClick={handleCick}>
          <Styled.DropdownTitle>
            <span>
              {`Hello, ${email}`}
              &nbsp;
            </span>
            <img src={ArrowDown} width="16px" height="16px" alt="arrow-down" />
          </Styled.DropdownTitle>
          <Styled.DropdownContent id="dropdown-content">
            <Link to="/my-info">
              <Styled.DropdownItem>My account</Styled.DropdownItem>
            </Link>
            <Link to="/my-info">
              <Styled.DropdownItem>My Order</Styled.DropdownItem>
            </Link>
            <Link to="/my-info">
              <Styled.DropdownItem>Enquiry</Styled.DropdownItem>
            </Link>
            <Link to="/my-info/resign">
              <Styled.DropdownItem>Resign</Styled.DropdownItem>
            </Link>
            <Styled.DropdownHr />
            <Link to="/sign-out">
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
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  email: state.user.email,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  retrieve: userId => dispatch(retrieveInfo(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Log);
