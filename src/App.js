import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import domainConfig from './config/domainConfig';
import './utils/webfontloader';

// Components
import Loadable from './loadable';

// Styled
import Wrapper from './styled_base/Wrapper';

// Minireset.css
import 'minireset.css/minireset.min.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (sessionStorage.getItem('token') ? (
        <Component {...props} />
    ) : (
        <Redirect
          to={{
            pathname: '/sign-in',
            state: { from: props.location },
          }}
        />
    ))
    }
  />
);

export class App extends React.PureComponent {
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
                    path={domainConfig.myInfoResignSurvey.path}
                    component={Loadable.ResignSurvey}
                  />
                  <PrivateRoute
                    path={domainConfig.myInfoResign.path}
                    component={Loadable.Resign}
                  />
                  <PrivateRoute
                    path={domainConfig.myInfoPatchPassword.path}
                    component={Loadable.PatchPassword}
                  />
                  <PrivateRoute
                    path={domainConfig.myInfoSurvey.path}
                    component={Loadable.Survey}
                  />
                  <PrivateRoute
                    path={domainConfig.myInfoOrder.path}
                    component={Loadable.Order}
                  />
                  <PrivateRoute
                    path={domainConfig.myInfoManage.path}
                    component={Loadable.ManageMyInfo}
                  />
                  <PrivateRoute
                    path={domainConfig.myInfoView.path}
                    component={Loadable.MyInfo}
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
                    path={domainConfig.join.path}
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
                    path={domainConfig.product.path}
                    component={Loadable.ProductDetail}
                  />
                  <Route
                    path={domainConfig.bonVoyage.path}
                    component={Loadable.BonVoyage}
                  />
                  <Route
                    path={domainConfig.contact.path}
                    component={Loadable.SendEmail}
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
                    path={domainConfig.main.path}
                    component={Loadable.Main}
                  />
                  <Route
                    exact
                    path={domainConfig.intro.path}
                    component={Loadable.Alert}
                  />
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
};

const mapStateToProps = state => ({
  isVisible: state.controlTitle,
  isScroll: state.controlScroll,
  isClose: state.controlClose,
});

export default connect(mapStateToProps)(App);
