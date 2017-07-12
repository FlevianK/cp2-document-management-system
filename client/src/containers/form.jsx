import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, label, onChange, placeholder, value, type="text"}) => {
  let wrapperClass = 'form-group';
  return (
    <div className="row">
      <div className="col s10 offset-m1">
        <div className={wrapperClass}>
          <label htmlFor={name}>{label}</label>
          <div className="field">
            <input
              type={type}
              name={name}
              className="form-control"
              placeholder={placeholder}
              value={value}
              onChange={onChange}/>
          </div>
        </div>
      </div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default Input;
