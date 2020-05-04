import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from './img/close-icon.png';
import './modal.scss';


const propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    hasCloseButton: PropTypes.bool,
    onCloseButtonClick: PropTypes.func,
    label: PropTypes.string,
}

const defaultProps = {
    hasCloseButton: false,
    onCloseButtonClick: () => {},
}

function ModalHeader(props) {
    const { title, subtitle, hasCloseButton, onCloseButtonClick, label } = props;
 
    return (
        <header className="modal__header">
            <h1>{title} {label && <label>{label}</label>}</h1>
            <h4>{subtitle}</h4>
            {
                hasCloseButton && 
                <button onClick={onCloseButtonClick} data-testid="btn-close-modal">
                    <img src={closeIcon} alt="x" />
                </button>
            }
        </header>
    );
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;