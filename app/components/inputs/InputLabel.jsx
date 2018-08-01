import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {DARK_GREY, GREY} from "../../styles/Colors";
import {SMALL_SPACER} from "../../styles/Spacing";
import {STANDARD_FONT_SIZE} from "../../styles/FontSizes";

const style = StyleSheet.create({
  label: {
    display: "block",
    color: GREY,
    fontSize: STANDARD_FONT_SIZE,
    fontWeight: "500",
    textTransform: "capitalize",
    marginBottom: SMALL_SPACER,
    ':hover': {
      color: DARK_GREY
    }
  }
});

const InputLabel = ({label, forKey}) => {
  if (!label) {
    return null;
  }
  return (
    <label className={css(style.label)} htmlFor={forKey}>
      {label}
    </label>
  )
};

InputLabel.propTypes = {
  label: PropTypes.string,
  forKey: PropTypes.string.isRequired
};

InputLabel.defaultProps = {
  label: false
};

export default InputLabel;
