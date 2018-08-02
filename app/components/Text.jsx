import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {STANDARD_FONT_SIZE} from "../styles/FontSizes";
import {GREY} from "../styles/Colors";
import {MEDIUM_SPACER} from "../styles/Spacing";

const style = StyleSheet.create({
  text: {
    fontSize: STANDARD_FONT_SIZE,
    margin: MEDIUM_SPACER
  }
});

const Text = ({color, children}) => (
  <p
    className={css(style.text)}
    style={{color}}
  >
    {children}
  </p>
);

Text.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  color: GREY
};

export default Text;
