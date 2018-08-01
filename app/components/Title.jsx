import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {DARK_GREY} from "../styles/Colors";
import {LARGE_FONT_SIZE} from "../styles/FontSizes";
import {LARGE_SPACER} from "../styles/Spacing";

const style = StyleSheet.create({
  title: {
    color: DARK_GREY,
    fontSize: LARGE_FONT_SIZE,
  }
});

const Title = ({alignment, margin, children}) => (
  <h1
    className={css(style.title)}
    style={{textAlign: alignment, margin: margin}}
  >
    {children}
  </h1>
);

Title.propTypes = {
  alignment: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.node.isRequired
};

Title.defaultProps = {
  alignment: "center",
  margin: `0 0 ${LARGE_SPACER} 0`
};

export default Title;
