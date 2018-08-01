import React from 'react';
import ReactDOM from 'react-dom';
import UnauthenticatedRoute from "./components/routing/UnauthenticatedRoute";
import SignIn from "./pages/sign-in/SignIn";
import { MemoryRouter, Switch } from 'react-router'

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
