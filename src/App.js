import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { listenWidth } from './reducers/reducer.controlWidth';
import dataConfig from './config/dataConfig';
import domainConfig from './config/domainConfig';
import './utils/webfontloader';

// Components
import Loadable from './loadable';

// Styled
import Wrapper from './styled_base/Wrapper';

// Minireset.css
import 'minireset.css/minireset.min.css';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = sessionStorage.getItem('token');

  if (!token) {
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect
            to={{
              pathname: domainConfig.signIn.path,
              state: { from: props.location },
            }}
          />
        )}
      />
    );
  }

  const base64Url = token.split('.')[1];
  const decodedData = JSON.parse(window.atob(base64Url));
  const now = moment.now();
  const result = moment(moment(now).format()).isSameOrBefore(
    moment.unix(decodedData.exp).format(),
  );

  if (!result) {
    alert(dataConfig.tokenExpiredText);
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect
            to={{
              pathname: domainConfig.signIn.path,
              state: { from: props.location },
            }}
          />
        )}
      />
    );
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const { listen } = this.props;
    listen(window.innerWidth);
  }

  render() {
    const { isVisible, isScroll, isClose } = this.props;

    return (
      <Fragment>
        <BrowserRouter>
          <Wrapper.App className="App">
            <Wrapper.ViewPortWrapper>
              <Wrapper.ContainerWrapper scroll={isScroll}>
                <Loadable.CloseButton visibility={isClose} />
                <Loadable.Header visibility={isVisible} />
                <Switch>
                  <Route
                    path={domainConfig.resignComplete.path}
                    component={Loadable.Alert}
                  />
                  <PrivateRoute
                    path={domainConfig.resignSurvey.path}
                    component={Loadable.ResignSurvey}
                  />
                  <PrivateRoute
                    path={domainConfig.resign.path}
                    component={Loadable.Resign}
                  />
                  <PrivateRoute
                    path={domainConfig.myEnquiry.path}
                    component={Loadable.Survey}
                  />
                  <PrivateRoute
                    path={domainConfig.myOrder.path}
                    component={Loadable.MyOrder}
                  />
                  <PrivateRoute
                    path={domainConfig.PatchPassword.path}
                    component={Loadable.PatchPassword}
                  />
                  <PrivateRoute
                    path={domainConfig.manageMyAccount.path}
                    component={Loadable.ManageMyAccount}
                  />
                  <PrivateRoute
                    path={domainConfig.myAccount.path}
                    component={Loadable.MyAccount}
                  />
                  <PrivateRoute
                    path={domainConfig.log.path}
                    component={Loadable.Log}
                  />
                  <Route
                    path={domainConfig.signUpComplete.path}
                    component={Loadable.Alert}
                  />
                  <Route
                    path={domainConfig.signUp.path}
                    component={Loadable.AddInfo}
                  />
                  <Route
                    path={domainConfig.resetPassword.path}
                    component={Loadable.Alert}
                  />
                  <Route
                    path={domainConfig.forgotPassword.path}
                    component={Loadable.ForgotPassword}
                  />
                  <Route
                    path={domainConfig.signOut.path}
                    component={Loadable.Alert}
                  />
                  <Route
                    path={domainConfig.signIn.path}
                    component={Loadable.SignIn}
                  />
                  <Route
                    path={domainConfig.paymentComplete.path}
                    component={Loadable.Alert}
                  />
                  <PrivateRoute
                    path={domainConfig.payment.path}
                    component={Loadable.Payment}
                  />
                  <Route
                    path={domainConfig.service.path}
                    component={Loadable.ServiceDetail}
                  />
                  <Route
                    path={domainConfig.bonVoyage.path}
                    component={Loadable.BonVoyage}
                  />
                  <Route
                    path={domainConfig.contact.path}
                    component={Loadable.Contact}
                  />
                  <Route
                    path={domainConfig.allEars.path}
                    component={Loadable.AllEars}
                  />
                  <Route
                    path={domainConfig.about.path}
                    component={Loadable.About}
                  />
                  <Route
                    path={domainConfig.main.path}
                    component={Loadable.Main}
                  />
                  <Route
                    path={domainConfig.termsOfService.path}
                    component={Loadable.TermsOfService}
                  />
                  <Route
                    path={domainConfig.privacyPolicy.path}
                    component={Loadable.PrivacyPolicy}
                  />
                  <Route
                    path={domainConfig.businessInfo.path}
                    component={Loadable.BusinessInfo}
                  />
                  <Route
                    exact
                    path={domainConfig.intro.indexPath}
                    component={Loadable.Alert}
                  />
                  <Route
                    exact
                    path={domainConfig.intro.path}
                    component={Loadable.Alert}
                  />
                  <Route component={Loadable.Alert} />
                </Switch>
                <Loadable.Footer visibility={isVisible} />
              </Wrapper.ContainerWrapper>
            </Wrapper.ViewPortWrapper>
          </Wrapper.App>
        </BrowserRouter>
        <Wrapper.GlobalStyle />
      </Fragment>
    );
  }
}

App.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isScroll: PropTypes.bool.isRequired,
  isClose: PropTypes.bool.isRequired,
  listen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isVisible: state.controlTitle,
  isScroll: state.controlScroll,
  isClose: state.controlClose,
});

const mapDispatchToProps = dispatch => ({
  listen: width => dispatch(listenWidth(width)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
