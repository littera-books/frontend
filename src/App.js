import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Loadable from './loadable';

// Styled
import StyledBase from './styled/Base';

// Minireset.css
import '../node_modules/minireset.css/minireset.min.css';

const App = () => (
  <BrowserRouter>
    <StyledBase.App className="App">
      <Route exact path="/" component={Loadable.Intro} />
      <StyledBase.FlexWrapper>
        <StyledBase.ColumnWrapper>
          <Loadable.Title />
          <Switch>
            <Route path="/all-ears" component={Loadable.AllEars} />
            <Route path="/main" component={Loadable.Main} />
          </Switch>
        </StyledBase.ColumnWrapper>
      </StyledBase.FlexWrapper>
    </StyledBase.App>
  </BrowserRouter>
);

export default App;
