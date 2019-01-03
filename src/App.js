import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
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
                  <Route path="/good-bye" component={Loadable.Alert} />
                  <PrivateRoute
                    path="/my-info/resign/survey"
                    component={Loadable.ResignSurvey}
                  />
                  <PrivateRoute
                    path="/my-info/resign"
                    component={Loadable.Resign}
                  />
                  <PrivateRoute
                    path="/my-info/patch-password"
                    component={Loadable.PatchPassword}
                  />
                  <PrivateRoute
                    path="/my-info/survey"
                    component={Loadable.Survey}
                  />
                  <PrivateRoute
                    path="/my-info/order"
                    component={Loadable.Order}
                  />
                  <PrivateRoute
                    path="/my-info/manage"
                    component={Loadable.ManageMyInfo}
                  />
                  <PrivateRoute
                    path="/my-info/view"
                    component={Loadable.MyInfo}
                  />
                  <PrivateRoute path="/log" component={Loadable.Log} />
                  <Route path="/complete" component={Loadable.Alert} />
                  <Route path="/join/add-info" component={Loadable.AddInfo} />
                  <Route path="/reset-password" component={Loadable.Alert} />
                  <Route
                    path="/auth/forgot-password"
                    component={Loadable.ForgotPassword}
                  />
                  <Route path="/sign-out" component={Loadable.Alert} />
                  <Route path="/sign-in" component={Loadable.SignIn} />
                  <Route path="/welcome" component={Loadable.Alert} />
                  <PrivateRoute
                    path="/payment/:productId"
                    component={Loadable.Payment}
                  />
                  <Route
                    path="/product/:productId"
                    component={Loadable.ProductDetail}
                  />
                  <Route path="/bon-voyage" component={Loadable.BonVoyage} />
                  <Route
                    path="/all-ears/send-email"
                    component={Loadable.SendEmail}
                  />
                  <Route path="/all-ears" component={Loadable.AllEars} />
                  <Route path="/about" component={Loadable.About} />
                  <Route
                    path="/terms-of-service"
                    component={Loadable.TermsOfService}
                  />
                  <Route
                    path="/privacy-policy"
                    component={Loadable.PrivacyPolicy}
                  />
                  <Route
                    path="/business-info"
                    component={Loadable.BusinessInfo}
                  />
                  <Route path="/main" component={Loadable.Main} />
                  <Route exact path="/" component={Loadable.Alert} />
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
