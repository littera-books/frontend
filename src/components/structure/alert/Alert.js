import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setClose, CloseFilters } from '../../../reducers/reducer.controlClose';

// Styled
import Wrapper from '../../../styled_base/Wrapper';

// data
import dataConfig from '../../../dataConfig';

export class Alert extends React.Component {
  state = {
    text: '',
  };

  componentDidMount() {
    const { close } = this.props;
    close(CloseFilters.HIDE_CLOSE);

    this.setState({ text: this.textSwitcher() });
  }

  shouldComponentUpdate(nextState) {
    const { text } = this.state;
    return text !== nextState.text;
  }

  componentWillUnmount() {
    const { close } = this.props;
    close(CloseFilters.SHOW_CLOSE);
  }

  textSwitcher() {
    const { match, email } = this.props;
    const splitEmail = email.split('@');
    switch (match.url) {
      case '/':
        return dataConfig.alertMessage.intro;
      case '/welcome':
        return `${dataConfig.alertMessage.payment[0]} ${splitEmail[0]}, ${
          dataConfig.alertMessage.payment[1]
        }`;
      case '/sign-out':
        return `${dataConfig.alertMessage.signOut} ${splitEmail[0]}`;
      case '/complete':
        return dataConfig.alertMessage.signUp;
      case '/reset-password':
        return dataConfig.alertMessage.resetPassword;
      case '/good-bye':
        return dataConfig.alertMessage.resign;
      default:
        return '';
    }
  }

  render() {
    const { text } = this.state;
    return (
      <Wrapper.FlexWrapper>
        <Link to="/main">
          <h1>{text}</h1>
        </Link>
      </Wrapper.FlexWrapper>
    );
  }
}

Alert.propTypes = {
  close: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  email: state.user.email,
});

const mapDispatchToProps = dispatch => ({
  close: filter => dispatch(setClose(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);
