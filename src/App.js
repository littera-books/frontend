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
import StyledBase from './styled/Base';

// Minireset.css
import '../node_modules/minireset.css/minireset.min.css';

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
            <PrivateRoute path="/log" component={Loadable.Log} />
            <Route path="/survey" component={Loadable.Survey} />
            <Route path="/sign-in" component={Loadable.SignIn} />
            <Route path="/von-voyage" component={Loadable.VonVoyage} />
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
