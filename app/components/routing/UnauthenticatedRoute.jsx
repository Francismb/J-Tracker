import React from 'react';
import { Route, Redirect } from 'react-router';

const UnauthenticatedRoute = ({component: Component, ...routeProps}) => (
  <Route
    {...routeProps}
    render={props => {
      if (true) {
        return <Component {...props}/>;
      } else {
        return <Redirect to={{pathname: "/authenticate"}}/>;
      }
    }}
  />
);

export default UnauthenticatedRoute;
