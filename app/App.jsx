import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Switch } from 'react-router'
import AuthenticatedRoute from "./components/routing/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/routing/UnauthenticatedRoute";
import SignIn from "./pages/sign-in/SignIn";
import Board from "./pages/board/Board";

/**
 * Signin
 * [Board, Time tracked, Settings]
 */

export const { Provider, Consumer } = React.createContext({
  client: null,
  setJiraClient: () => {}
});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      client: null
    }
  }

  setJiraClient = client => {
    this.setState({
      ...this.state,
      client: client
    });
  };

  render() {
    return (
      <Provider value={{
        client: this.state.client,
        setJiraClient: this.setJiraClient
      }}>
        <Switch>
          <UnauthenticatedRoute path={'/'} exact component={SignIn}/>
          <AuthenticatedRoute path={'/board'} exact component={Board}/>
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
