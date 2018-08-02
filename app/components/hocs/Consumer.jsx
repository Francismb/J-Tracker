import React from 'react';
import {Consumer} from "../../App";

const withConsumer = Component => props => (
  <Consumer>
    {(store) => <Component {...props} store={store}/>}
  </Consumer>
);

export default withConsumer;
