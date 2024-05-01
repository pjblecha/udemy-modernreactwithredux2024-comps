import PropTypes from 'prop-types';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
 }) {
    return (
        <button>{children}</button>
    );
}

Button.propTypes = {
    variationIsValid: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) 
        + Number(!!secondary) 
        + Number(!!success) 
        + Number(!!warning) 
        + Number(!!danger);
        if (count > 1) return new Error('May use only one of primary, secondary, success, warning, danger');
    }
}

export default Button;