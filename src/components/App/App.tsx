import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Pages from '../../pages/index'
import AuthPages from '../auth'; 

import './App.scss';

const App: React.FC = () => {
  return (
    <> 
      <Router>
        <Switch>
          <AuthPages />

          <Route path="/">
            <Pages />
          </Route>

        </Switch>
      </Router>  
    </>
  );
}

export default App;
