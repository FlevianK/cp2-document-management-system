import React from 'react';
import PropTypes from 'prop-types';

export const SelectOptions = ({ name, access, label, onChange, defaultOption, value, options }) => (
  <div className="row">
    <div className="col s10 offset-m1">
      <div className="select=form">
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <select select className="browser-default"
            name={name}
            onChange={onChange}>
            <option value="" defaultValue>{defaultOption}</option>
            {options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })
            }
          </select>
        </div>
      </div>
    </div>
  </div>


);
SelectOptions.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};
export default SelectOptions;
