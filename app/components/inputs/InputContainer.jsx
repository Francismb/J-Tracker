import React from 'react';
import PropTypes from 'prop-types';

const style = {
  marginBottom: '14px'
};

const InputContainer = ({children}) => (
  <div style={style}>
    {children}
  </div>
);

InputContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default InputContainer;
