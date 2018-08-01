import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {BLUE, DARK_BLUE, WHITE} from "../../styles/Colors";
import {MEDIUM_SMALL_FONT_SIZE} from "../../styles/FontSizes";
import {MEDIUM_SPACER} from "../../styles/Spacing";

const style = StyleSheet.create({
  button: {
    display: 'block',
    padding: '0 40px',
    height: '47px',
    margin: MEDIUM_SPACER,
    background: BLUE,
    color: WHITE,
    fontSize: MEDIUM_SMALL_FONT_SIZE,
    textTransform: "uppercase",
    borderRadius: "3px",
    boxShadow: "0 5px 30px rgba(0, 66, 255, 0.3)",
    transition: 'box-shadow 0.5s, background 0.5s',
    marginTop: MEDIUM_SPACER,
    ':hover': {
      background: DARK_BLUE,
      boxShadow: "0 5px 30px rgba(0, 66, 255, 0.3)"
    },
    ':focus': {
      outline: 'none',
      background: DARK_BLUE,
      boxShadow: "0 5px 30px rgba(0, 66, 255, 0.3)"
    }
  }
});

const Button = ({onClick, children}) => (
  <button
    type="button"
    className={css(style.button)}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
