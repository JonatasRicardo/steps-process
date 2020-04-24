import React from 'react';
import StepItem from '../StepItem';
import StepsContainer from '../StepsContainer';

export default { title: 'Steps' };

export const StepItemWithStatus = () => <StepItem title="Step Title" statusDate="05/20/2020" statusName="Created on" />;
export const StepsContainerWith6Steps = () => (
  <StepsContainer>
    <StepItem title="Draft" statusName="Created on" statusDate="01/31/2020" />
    <StepItem title="Pending Approval" statusName="Approval sent" statusDate="02/14/2020" />
    <StepItem title="Approved" statusName="Abandoned on" statusDate="02/20/2020" />
    <StepItem title="Execute" />
    <StepItem title="Concluded" />
    <StepItem title="Closed" />
  </StepsContainer>
);
export const StepsContainerWith6StepsAndCurrent1 = () => (
  <StepsContainer currentStep={1}>
    <StepItem title="Draft" statusName="Created on" statusDate="01/31/2020" />
    <StepItem title="Pending Approval" statusName="Approval sent" statusDate="02/14/2020" />
    <StepItem title="Approved" statusName="Abandoned on" statusDate="02/20/2020" />
    <StepItem title="Execute" />
    <StepItem title="Concluded" />
    <StepItem title="Closed" />
  </StepsContainer>
);
export const StepsContainerWith6StepsAndCurrent3 = () => (
  <StepsContainer currentStep={3}>
    <StepItem title="Draft" statusName="Created on" statusDate="01/31/2020" />
    <StepItem title="Pending Approval" statusName="Approval sent" statusDate="02/14/2020" />
    <StepItem title="Approved" statusName="Abandoned on" statusDate="02/20/2020" />
    <StepItem title="Execute" />
    <StepItem title="Concluded" />
    <StepItem title="Closed" />
  </StepsContainer>
);
export const StepsContainerWith6StepsAndCurrent6 = () => (
  <StepsContainer currentStep={6}>
    <StepItem title="Draft" statusName="Created on" statusDate="01/31/2020" />
    <StepItem title="Pending Approval" statusName="Approval sent" statusDate="02/14/2020" />
    <StepItem title="Approved" statusName="Abandoned on" statusDate="02/20/2020" />
    <StepItem title="Execute" />
    <StepItem title="Concluded" />
    <StepItem title="Closed" />
  </StepsContainer>
);