import React from 'react';
import './steps.scss';

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

export default StepsContainer;