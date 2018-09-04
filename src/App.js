import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Loadable from './loadable';

// Minireset.css
import '../node_modules/minireset.css/minireset.min.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/main" component={Loadable.Main} />
        <Route exact path="/" component={Loadable.Intro} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
