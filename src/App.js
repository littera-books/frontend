import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Loadable from './loadable';

// Styled
import StyledBase from './styled/base';

// Minireset.css
import '../node_modules/minireset.css/minireset.min.css';

const App = () => (
  <BrowserRouter>
    <StyledBase.App className="App">
      <Switch>
        <Route path="/main" component={Loadable.Main} />
        <Route exact path="/" component={Loadable.Intro} />
      </Switch>
    </StyledBase.App>
  </BrowserRouter>
);

export default App;
