import PropTypes from 'prop-types';
import './Inputs.css';

export const InputField = ({ id, label, name, type, onChange, value, options, ...props }) => {

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
      {label ? <label htmlFor={id}>{label}</label> : ""}

      {/* Input field type Text */}
      {type === 'text' && (
        <input className="form-control" id={name} name={name} onChange={onChange} type="text" value={value} />
      )}
      {type === 'date' && (
        <input className="taskForm__select" id={name} name={name} onChange={onChange} type="date" value={value} />
      )}

      {type === 'checkbox' && (
        <label className='checkbox'><input className="form-check" data-cy='checkbox' id={id} name={name} onChange={onChange} type="checkbox" value={value} /></label>
      )}

      {type === 'select' && (
        <select className="form-control" id={name} name={name} onChange={onChange} value={value}>
          {renderOptions()}
        </select>
      )}

      {type === 'textarea' && (
        <textarea className="form-control" id={name} name={name} onChange={onChange} rows={2} value={value} />
      )}

    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  date: PropTypes.string,
  complete: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'select', 'textarea', 'checkbox', 'date']).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ),
};

