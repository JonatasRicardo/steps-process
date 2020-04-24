import React, { useEffect, useState } from 'react';
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
    const [didUpdate, setDidUpdate] = useState(false);

    useEffect(() => {
        if(active) setDidUpdate(true);
    }, [active])


    const activeClass = active ? 'is-active' : '';
    const isUpdatedClass = didUpdate ? 'is-updated' : '';
 
    return (
        <div className={`modal ${activeClass} ${isUpdatedClass}`} role="dialog" data-testid="modal">
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