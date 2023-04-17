import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {

  const mode = primary ? 'todo-list-button--primary' : 'todo-list-button--secondary';

  return (
    <button
      className={['todo-list-button', `todo-list-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      // type="button"
      {...props}
    >
      {props.children}
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool.isRequired,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  // Icons For the Button
  children: PropTypes.object,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  children: null,
  onClick: undefined,
};
