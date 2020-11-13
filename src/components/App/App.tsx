import React, {FC} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import PrivateRoute from '../generic/PrivateRoute';
import Pages from '../../pages/index'
import AuthPages from '../auth'; 
import NotFoundPage from '../../pages/not-found-page';

import './App.scss';

const App: FC = () => { 
  return (
    <> 
      <Router>
        <Switch>
          
          <AuthPages /> 
          
          <PrivateRoute>
            <Pages />
          </PrivateRoute>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>  
    </>
  );
}

export default App;
