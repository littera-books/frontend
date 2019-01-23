import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setClose, CloseFilters } from '../../../reducers/reducer.controlClose';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';

export class Alert extends React.Component {
  state = {
    text: '',
    title: '',
  };

  componentDidMount() {
    const { close } = this.props;
    close(CloseFilters.HIDE_CLOSE);

    this.setState({
      text: this.textSwitcher()[0],
      title: this.textSwitcher()[1],
    });
  }

  shouldComponentUpdate(nextState) {
    const { text, title } = this.state;
    return text !== nextState.text || title !== nextState.title;
  }

  componentWillUnmount() {
    const { close } = this.props;
    close(CloseFilters.SHOW_CLOSE);
  }

  textSwitcher() {
    const { email, location } = this.props;
    const splitEmail = email.split('@');
    switch (location.pathname) {
      case domainConfig.intro.path:
        return [dataConfig.alertMessage.intro, domainConfig.intro.title];

      case domainConfig.intro.indexPath:
        return [dataConfig.alertMessage.intro, domainConfig.intro.title];

      case domainConfig.paymentComplete.path:
        return [
          `${dataConfig.alertMessage.payment[0]} ${splitEmail[0]}, ${
            dataConfig.alertMessage.payment[1]
          }`,
          domainConfig.paymentComplete.title,
        ];

      case domainConfig.signOut.path:
        return [
          `${dataConfig.alertMessage.signOut} ${splitEmail[0]}.`,
          domainConfig.signOut.title,
        ];

      case domainConfig.signUpComplete.path:
        return [
          dataConfig.alertMessage.signUp,
          domainConfig.signUpComplete.title,
        ];

      case domainConfig.resetPassword.path:
        return [
          dataConfig.alertMessage.resetPassword,
          domainConfig.resetPassword.title,
        ];

      case domainConfig.resignComplete.path:
        return [
          dataConfig.alertMessage.resign,
          domainConfig.resignComplete.title,
        ];

      default:
        return [dataConfig.pageNotFoundText, domainConfig.pageNotFound.title];
    }
  }

  render() {
    const { location } = this.props;
    const { text, title } = this.state;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={title} path={location.pathname} />
        <Link to={domainConfig.main.path}>
          <h1>{text}</h1>
        </Link>
      </Wrapper.FlexWrapper>
    );
  }
}

Alert.propTypes = {
  close: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
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
