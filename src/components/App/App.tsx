import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Pages from '../../pages/index'
import Auth from '../SignIn';

import './App.scss';

const App: React.FC = () => {
  return (
    <> 
      <Router>
        <Switch>
          <Route path="/auth" exact>
            <Auth />
          </Route>

          <Route path="/">
            <Pages />
          </Route>

        </Switch>
      </Router>  
    </>
  );
}

export default App;
