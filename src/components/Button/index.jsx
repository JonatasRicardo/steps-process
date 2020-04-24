import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    light: PropTypes.bool,
}

const defaultProps = {
    light: false,
}

function Button(props) {
    const { children, light } = props;
    const lightCLass = light ? 'light' : '';
    return (
        <button className={`button ${lightCLass}`} data-testid="button" {...props}>
            {children}
        </button>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;