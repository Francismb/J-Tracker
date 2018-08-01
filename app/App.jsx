import React from 'react';
import ReactDOM from 'react-dom';
import UnauthenticatedRoute from "./components/routing/UnauthenticatedRoute";
import SignIn from "./pages/sign-in/SignIn";
import { MemoryRouter, Switch } from 'react-router'

/**
 * Signin
 * [Board, Time tracked, Settings]
 */

const { Provider, Consumer } = React.createContext({});

class App extends React.Component {

  state = {
    authentication: null
  };

  render() {
    return (
      <Provider value={this.state}>
        <Switch>
          <UnauthenticatedRoute path={'/'} component={SignIn}/>
        </Switch>
      </Provider>
    )
  }

}

// Rendering
ReactDOM.render((
  <MemoryRouter>
    <App/>
  </MemoryRouter>
), document.getElementById('root'));

export {Consumer};
