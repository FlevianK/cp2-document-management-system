import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ name, label, onchange, defaultOption, value, error, options }) => {
  return (
    <div className="form-group>
      <label htmlFor={name}>{label}</label>
        <div className="field">
          <select 
            name={name}
            value={value}
            onchange={onchange}
            className="form-control">
            <option value="">{defaultOption}</option>
            {optios.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })
            }
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  option: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
