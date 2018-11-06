import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import './utils/webfontloader';

// Components
import Loadable from './loadable';

// Styled
import StyledBase from './styled_base/Wrapper';

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
    const { isVisible } = this.props;

    return (
      <BrowserRouter>
        <StyledBase.App className="App">
          <Loadable.Title visibility={isVisible} />
          <Switch>
            <PrivateRoute
              path="/letter-box/:id"
              component={Loadable.LetterBoxDetail}
            />
            <PrivateRoute path="/letter-box" component={Loadable.LetterBox} />
            <PrivateRoute
              path="/my-info/resign/survey"
              component={Loadable.ResignSurvey}
            />
            <PrivateRoute path="/my-info/resign" component={Loadable.Resign} />
            <PrivateRoute
              path="/my-info/patch-password"
              component={Loadable.PatchPassword}
            />
            <PrivateRoute
              path="/my-info/manage"
              component={Loadable.ManageMyInfo}
            />
            <PrivateRoute path="/my-info" component={Loadable.MyInfo} />
            <PrivateRoute path="/log" component={Loadable.Log} />
            <Route path="/add-info" component={Loadable.AddInfo} />
            <Route path="/accept" component={Loadable.Accept} />
            <Route path="/survey" component={Loadable.Survey} />
            <Route
              path="/forgot-password"
              component={Loadable.ForgotPassword}
            />
            <PrivateRoute path="/sign-out" component={Loadable.SignOut} />
            <Route path="/sign-in" component={Loadable.SignIn} />
            <Route path="/payment" component={Loadable.Payment} />
            <Route path="/bon-voyage" component={Loadable.BonVoyage} />
            <PrivateRoute
              path="/all-ears/send"
              component={Loadable.SendLetter}
            />
            <Route path="/all-ears" component={Loadable.AllEars} />
            <Route path="/about" component={Loadable.About} />
            <Route path="/main" component={Loadable.Main} />
            <Route exact path="/" component={Loadable.Intro} />
          </Switch>
        </StyledBase.App>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  isVisible: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  isVisible: state.controlTitle,
});

export default connect(mapStateToProps)(App);
