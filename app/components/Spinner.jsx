import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {BLUE} from "../styles/Colors";

const animation = {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
};

const style = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.6)',
    pointerEvents: 'none'
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: `6px solid rgba(90, 132, 253, 0.2)`,
    borderLeft: `6px solid ${BLUE}`,
    transform: 'translateZ(-50%) translateX(-50%)',
    animationName: animation,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  }
});


const Spinner = ({active}) => {
  if (!active) {
    return null;
  }
  return (
    <div className={css(style.overlay)}>
      <div className={css(style.spinner)}/>
    </div>
  );
};

Spinner.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Spinner;
