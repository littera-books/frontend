import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './utils/webfontloader';

// Components
import Loadable from './loadable';

// Styled
import StyledBase from './styled/Base';

// Minireset.css
import '../node_modules/minireset.css/minireset.min.css';

const App = () => (
  <BrowserRouter>
    <StyledBase.App className="App">
      <StyledBase.FlexWrapper>
        <StyledBase.ColumnWrapper>
          <Loadable.Title />
          <Switch>
            <Route path="/all-ears" component={Loadable.AllEars} />
            <Route path="/about" component={Loadable.About} />
            <Route path="/main" component={Loadable.Main} />
            <Route exact path="/" component={Loadable.Intro} />
          </Switch>
        </StyledBase.ColumnWrapper>
      </StyledBase.FlexWrapper>
    </StyledBase.App>
  </BrowserRouter>
);

export default App;
