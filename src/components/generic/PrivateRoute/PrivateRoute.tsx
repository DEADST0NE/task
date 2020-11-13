import React from 'react';
import { Route, Redirect } from 'react-router-dom';

declare namespace JSX {
  interface IntrinsicElements {
    PrivateRoute: { exact?: boolean; };
  }
}

const PrivateRoute = ({ children: Component, href, exact = false }: {children: any, href?: string, exact?: boolean}) => {
  const authUser = !!localStorage.getItem("accessToken");
  console.log(Component, href, exact, authUser);
  return (
    <Route path="/" exact={exact}> 
      { authUser ? Component : <Redirect to="/signIn" />} 
    </Route> 
  );
}

export default PrivateRoute;