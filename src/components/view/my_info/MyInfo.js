import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { readToken } from '../../../reducers/reducer.user';

// Styled
import StyledBase from '../../../styled/Base';

class MyInfo extends React.Component {
  componentDidMount() {
    const { read } = this.props;
    read();
  }

  render() {
    const { username, email } = this.props;
    return (
      <StyledBase.FlexWrapper>
        <StyledBase.ColumnWrapper>
          <h1>My Info</h1>
          <p>{username}</p>
          <p>{email}</p>
        </StyledBase.ColumnWrapper>
      </StyledBase.FlexWrapper>
    );
  }
}

MyInfo.propTypes = {
  read: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  username: state.user.username,
  email: state.user.email,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyInfo);
