import { useState } from 'react';
import PropTypes from 'prop-types';

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
        <input id={name} name={name} onChange={handleInputChange} type="text" value={inputValue} />
      )}
      {type === 'checkbox' && (
        <input id={name} name={name} onChange={handleInputChange} type="checkbox" value={value} />
      )}
      {type === 'select' && (
        <select id={name} name={name} onChange={handleInputChange} value={inputValue}>
          {renderOptions()}
        </select>
      )}
      {type === 'textarea' && (
        <textarea id={name} name={name} onChange={handleInputChange} value={inputValue} />
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

