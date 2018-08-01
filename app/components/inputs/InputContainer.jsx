import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {MEDIUM_SPACER} from "../../styles/Spacing";

const style = StyleSheet.create({
  container: {
    margin: MEDIUM_SPACER
  }
});

const InputContainer = ({children}) => (
  <div className={css(style.container)}>
    {children}
  </div>
);

InputContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default InputContainer;
