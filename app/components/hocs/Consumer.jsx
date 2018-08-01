import React from 'react';
import {Consumer} from "../../App";

const withConsumer = Component => props => (
  <Consumer>
    {(stores) => <Component {...props} {...stores}/>}
  </Consumer>
);

export default withConsumer;
