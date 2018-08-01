import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import InputContainer from './InputContainer';
import InputLabel from './InputLabel';
import {STANDARD_FONT_SIZE} from '../../styles/FontSizes';
import {DARK_GREY, LIGHT_GREY} from '../../styles/Colors';
import {MEDIUM_SPACER} from '../../styles/Spacing';

const style = StyleSheet.create({
  input: {
    display: 'block',
    width: '100%',
    color: DARK_GREY,
    fontWeight: '400',
    fontSize: STANDARD_FONT_SIZE,
    padding: `0 ${MEDIUM_SPACER}`,
    background: 'transparent',
    border: `1px solid ${LIGHT_GREY}`,
    borderRadius: '3px',
    outline: '0 !important',
    boxShadow: 'none',
    height: '46px',
    transition: 'border 0.5s, color 0.5s, box-shadow 0.5s',
    ':hover': {
      border: `1px solid ${DARK_GREY}`,
      color: DARK_GREY,
      boxShadow: '0 5px 10px rgba(45, 50, 64, 0.2)'
    },
    ':focus': {
      border: `1px solid ${DARK_GREY}`,
      color: DARK_GREY,
      boxShadow: '0 5px 10px rgba(45, 50, 64, 0.2)'
    }
  }
});

const createId = attribute => `${attribute}-textinput`;

const TextInput = ({label, placeholder, attribute, value, onChange, type}) => (
  <InputContainer>
    <InputLabel label={label} forKey={createId(attribute)}/>
    <input
      id={createId(attribute)}
      className={css(style.input)}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={event => onChange(attribute, event.target.value)}
    />
  </InputContainer>
);

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  attribute: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  label: false,
  placeholder: false,
  type: 'text'
};

export default TextInput;
