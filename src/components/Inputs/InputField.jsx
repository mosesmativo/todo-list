import PropTypes from 'prop-types';

export const InputField = ({ label, name, type, onChange, value, options }) => {
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select name={name} onChange={onChange} value={value}>
            <option value="">-- Select {label} --</option>
            {options.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <>
            {options.map(({ label, value }) => (
              <div key={value}>
                <input
                  checked={value === value}
                  id={value}
                  name={name}
                  onChange={onChange}
                  type="radio"
                  value={value}
                />
                <label htmlFor={value}>{label}</label>
              </div>
            ))}
          </>
        );
      case 'textarea':
        return <textarea name={name} onChange={onChange} value={value} />;
      default:
        return <input name={name} onChange={onChange} type={type} value={value} />;
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {renderInput()}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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