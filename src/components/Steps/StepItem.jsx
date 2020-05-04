import React from 'react';
import PropTypes from 'prop-types';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import stepIcon from './img/step-icon.png';
import './steps.scss';

const propTypes = {
    title: PropTypes.string,
    statusName: PropTypes.string,
    statusDate: PropTypes.string,
    currentStep: PropTypes.number,
    stepIndex: PropTypes.number,
}

const defaultProps = {
    currentStep: -1,
    stepIndex: 0,
}

function StepItem(props) {
    const {
        currentStep,
        stepIndex,
        title,
        statusName,
        statusDate,
    } = props;

    const done = currentStep >= stepIndex;
    const doneClass = currentStep >= stepIndex ? 'is-done' : '';
    const nextDoneClass = currentStep > stepIndex ? 'is-next-done' : '';

    return (
        <div role="listitem" className={`step-item ${doneClass} ${nextDoneClass}`} data-testid="step-item">
            <span className="step-item__icon">
                <span>
                    {done && <img src={stepIcon} alt="step done" />}
                    <span className="step-item__index">{stepIndex}</span>
                </span>
            </span>
            {
                title &&
                <div className="step-item__title">
                    {title}
                </div>
            }
            <div className="step-item__status">
                {
                    statusName &&
                    <div className="step-item__status-name">
                        {statusName}
                    </div>
                }
                {
                    statusDate &&
                    <div className="step-item__status-date">
                        {statusDate}
                    </div>
                }
            </div>
        </div>
    );
}

StepItem.propTypes = propTypes;
StepItem.defaultProps = defaultProps;

export default StepItem;