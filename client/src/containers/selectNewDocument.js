import React from 'react';
import PropTypes from 'prop-types';



export const SelectOption = ({ name, roleUser, label, onChange, defaultOption, value, errors }) => (
<div className="select=form">
  <label htmlFor={name}>{label}</label>
  <div className="field">
    <select className="browser-default"

      name={name}
      onChange={onChange}>
      <option value="" disabled defaultValue>{defaultOption}</option>
      <option value="private">Private</option>
      <option value="public">Public</option>
      <option value={roleUser}>Role</option>
    </select>
    {error && <div className="alert-danger">{error}</div>}
  </div>
</div>
);
SelectOption.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array
};
export default SelectOption;
