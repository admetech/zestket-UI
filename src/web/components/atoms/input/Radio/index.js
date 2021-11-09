import React, { useCallback } from 'react';
import PropTypes, { arrayOf, oneOfType, shape } from 'prop-types';

const Radio = ({
  name,
  value,
  label,
  options = [],
  onChange,
}) => {
  const handleChange = useCallback(
    ({ target: { value: v } }) => onChange(name, v),
    [onChange, name],
  );

  return (
    <div className="mb-3 d-flex">
      <p className='mb-0 mr-3'>{label}</p>
      {options.map(({ value: v, label: l }, i) => (
        <div key={i} className="form-check form-check-inline mb-0">
          <input
            className='form-check-input'
            type='radio'
            name={name}
            id={`${name}${i}`}
            value={v}
            checked={value === v}
            onChange={handleChange}
          />
          <label className="form-check-label user-select-none" htmlFor={`${name}${i}`}>
            {l}
          </label>
        </div>
      ))}
    </div>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  value: oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.string,
  options: arrayOf(shape({
    value: oneOfType([PropTypes.bool, PropTypes.string]),
    label: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func,
};

export default Radio;
