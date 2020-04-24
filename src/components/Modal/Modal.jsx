import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const propTypes = {
    active: PropTypes.bool,
}

const defaultProps = {
    active: false,
}

function Modal(props) {
    const { active, children } = props;

    const activeClass = active ? 'is-active' : '';
 
    return (
        <div className={`modal ${activeClass}`} role="dialog" data-testid="modal">
            <div className="modal__body">
                {children}
            </div>
            <div className="modal__overlay" />
        </div>
    );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;