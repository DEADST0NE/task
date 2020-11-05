import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import PasswordRecovery from './PasswordRecovery';

const AuthPages: React.FC = () => {
  return (
    <> 
      <Router>
        <Switch>
          <Route path="/signIn" exact>
            <SignIn />
          </Route>

          <Route path="/signUp" exact>
            <SignUp />
          </Route>

          <Route path="/passwordRecovery" exact>
            <PasswordRecovery />
          </Route>
        </Switch>
      </Router>  
    </>
  );
}

export default AuthPages;
