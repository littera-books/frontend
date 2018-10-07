import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut } from '../../../reducers/reducer.auth';
import {
  setHeaderProperty,
  setMessageProperty,
} from '../../../reducers/reducer.popup';
import dataConfig from '../../../dataConfig';

// Components
import Loadable from '../../../loadable';
import Helmet from '../../helmet/Helmet';

// Styled
import StyledBase from '../../../styled/Base';

class SignOut extends React.Component {
  state = {
    popupFilter: false,
  };

  componentDidMount() {
    const { logOut, setHeader, setMessage } = this.props;
    setHeader(dataConfig.popupMessage.signOut.header);
    setMessage(dataConfig.popupMessage.signOut.message);
    this.setState({ popupFilter: true });
    logOut();
  }

  render() {
    const { popupFilter } = this.state;
    const { history } = this.props;
    return (
      <StyledBase.FlexWrapper>
        <Helmet pageTitle="Sign Out" />
        <h1>Sign Out</h1>
        {popupFilter ? (
          <Loadable.SimplePopup replace={history.replace} destination="/main" />
        ) : null}
      </StyledBase.FlexWrapper>
    );
  }
}

SignOut.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  logOut: PropTypes.func.isRequired,
  setHeader: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(signOut()),
  setHeader: header => dispatch(setHeaderProperty(header)),
  setMessage: message => dispatch(setMessageProperty(message)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SignOut);
