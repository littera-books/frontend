import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Loadable from './loadable';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Loadable.Intro} />
    </div>
  </BrowserRouter>
);

export default App;
