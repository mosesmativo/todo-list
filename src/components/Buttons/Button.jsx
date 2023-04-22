import PropTypes from 'prop-types'
import './Button.scss'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {

  const mode = primary ? 'button__primary' : 'button__secondary';

  return (
    <button
      className={['button', `button_size_${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
      data-testid="buttoncomponent"
    >
      {props.children}
      {label}
    </button>
  );
};

Button.propTypes = {

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
  label: '',
  size: 'medium',
  children: null,
  onClick: undefined,
};
