import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut } from '../../../reducers/reducer.auth';

// Styled
import StyledBase from '../../../styled/Base';

class ResignSurvey extends React.Component {
  componentDidMount() {
    const { logOut } = this.props;
    logOut();
  }

  render() {
    return (
      <StyledBase.FlexWrapper>
        <h1>resign survey</h1>
      </StyledBase.FlexWrapper>
    );
  }
}

ResignSurvey.propTypes = {
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(signOut()),
});

export default connect(
  null,
  mapDispatchToProps,
)(ResignSurvey);
