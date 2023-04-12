import { useState } from 'react';
import PropTypes from 'prop-types';

export const InputField = ({ label, name, type, onChange, value, placeholder, options }) => {
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
    if (type === 'radio') {
      return options.map((option) => (
        <div key={option.value}>
          <input
            checked={inputValue === option.value}
            id={`${name}-${option.value}`}
            name={name}
            onChange={handleInputChange}
            type="radio"
            value={option.value}
          />
          <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
        </div>
      ));
    }
    return null;
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {type === 'text' && (
        <input id={name} name={name} onChange={handleInputChange} placeholder={placeholder} type="text" value={inputValue} />
      )}
      {type === 'select' && (
        <select id={name} name={name} onChange={handleInputChange} value={inputValue}>
          {renderOptions()}
        </select>
      )}
      {type === 'radio' && renderOptions()}
      {type === 'textarea' && (
        <textarea id={name} name={name} onChange={handleInputChange} placeholder={placeholder} value={inputValue} />
      )}
      {type === 'checkbox' && (
        <input id={name} name={name} onChange={handleInputChange} type="checkbox" value={inputValue} />
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'select', 'radio', 'textarea', 'checkbox']).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ),
};

InputField.defaultProps = {
  label: 'Label Here',
};