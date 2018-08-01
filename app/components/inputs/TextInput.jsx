import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({label, placeholder, key, value, onChange, type}) => (
  <div>
    {!!label && (
      <label>
        {label}
      </label>
    )}
    <input
      type='type'
      value={value}
      placeholder={placeholder}
      onChange={event => onChange(key, event.target.value)}
    />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  key: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  label: false,
  placeholder: false,
  type: 'text'
};
