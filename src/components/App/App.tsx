import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header';

import NotFoundPage from '../../pages/not-found-page';
import WelcomePage from '../../pages/welcome-page';
import Footer from '../Footer';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
    <Header />
      <Router>
        <Switch>
          <Route path="/login" exact>
            Авторизация
          </Route>

          <Route path="/welcome">
            <WelcomePage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router> 
      <Footer />
    </>
  );
}

export default App;
