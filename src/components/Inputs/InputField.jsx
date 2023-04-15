import PropTypes from 'prop-types';
import './Inputs.css';

export const InputField = ({ label, name, type, onChange, value, options }) => {

  // OPtions for select Box
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
      {label ? <label htmlFor={name}>{label}</label> : ""}
      {type === 'text' && (
        <input className="form-control" id={name} name={name} onChange={onChange} type="text" value={value} />
      )}
      {type === 'checkbox' && (
        <input className="form-check" id={name} name={name} onChange={onChange} type="checkbox" value={value} />
      )}
      {type === 'select' && (
        <select className="form-control" id={name} name={name} onChange={onChange} value={value}>
          {renderOptions()}
        </select>
      )}
      {type === 'textarea' && (
        <textarea className="form-control" id={name} name={name} onChange={onChange} rows={5} value={value} />
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

