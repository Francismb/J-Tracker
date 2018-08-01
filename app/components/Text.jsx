import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {STANDARD_FONT_SIZE} from "../styles/FontSizes";
import {GREY} from "../styles/Colors";
import {MEDIUM_SPACER} from "../styles/Spacing";

const style = StyleSheet.create({
  text: {
    color: GREY,
    fontSize: STANDARD_FONT_SIZE,
    margin: MEDIUM_SPACER
  }
});

const Text = ({children}) => (
  <p className={css(style.text)}>
    {children}
  </p>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
