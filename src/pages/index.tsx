import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = lazy(() => import('./not-found-page'));

const Pages: React.FC = () => {
  return (
    <>
    <Header />
      <Router>
        <Suspense fallback={() => "Loading ..."}>
            <Switch>

              <Route path="/task" exact>
                task
              </Route>

              <Route path="/welcome">
                welcome
              </Route>

              <Route>
                <NotFoundPage />
              </Route>

            </Switch>
          </Suspense>
        </Router> 
      <Footer />
      </>
  )
}

export default Pages;