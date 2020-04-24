import React from 'react';
import PropTypes from 'prop-types';
import './steps.scss';

const propTypes = {
    currentStep: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}

const defaultProps = {
    currentStep: -1,
    stepIndex: 0,
}

function StepsContainer(props) {
    const { children, currentStep } = props;

    return (
        <div className="steps-container" role="list" data-testid="steps-container">
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    currentStep,
                    stepIndex: index+1,
                })
            })}
        </div>
    )
}

StepsContainer.propTypes = propTypes;
StepsContainer.defaultProps = defaultProps;

export default StepsContainer;