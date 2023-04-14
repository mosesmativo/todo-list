import { useState } from 'react';
import PropTypes from 'prop-types';
import './Inputs.css';

export const InputField = ({ label, name, type, onChange, value, options }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  const renderOptions = () => {
    if (!options) return null;
    if (type === 'select') {
      return options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ));
    }
    return null;
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {type === 'text' && (
        <input className="form-control" id={name} name={name} onChange={handleInputChange} type="text" value={inputValue} />
      )}
      {type === 'checkbox' && (
        <input className="form-check" id={name} name={name} onChange={handleInputChange} type="checkbox" value={inputValue} />
      )}
      {type === 'select' && (
        <select className="form-control" id={name} name={name} onChange={handleInputChange} value={inputValue}>
          {renderOptions()}
        </select>
      )}
      {type === 'textarea' && (
        <textarea className="form-control" id={name} name={name} onChange={handleInputChange} rows={5} value={inputValue} />
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'select', 'textarea', 'checkbox']).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ),
};

