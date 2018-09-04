import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Loadable from './loadable';

// Minireset.css
import '../node_modules/minireset.css/minireset.min.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route path="/main" component={Loadable.Main} />
      <Route exact path="/" component={Loadable.Intro} />
    </div>
  </BrowserRouter>
);

export default App;
