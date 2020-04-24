import React from 'react';
import { render } from '@testing-library/react';
import StepItem from '../StepItem';
import StepsContainer from '../StepsContainer';

  it('renders Steps components', () => {
    const { getByTestId, getAllByTestId } = render(
      <StepsContainer>
        <StepItem title="Execute" />
        <StepItem title="Concluded" />
        <StepItem title="Closed" />
      </StepsContainer>
    );
    const stepsContainerElement = getByTestId('steps-container');
    const stepItemElements = getAllByTestId('step-item');
    expect(stepsContainerElement).toBeDefined();
    expect(stepItemElements).toHaveLength(3)
  });

  it('Current Step classes', () => {
    const { getByTestId } = render(
      <StepsContainer currentStep={2}>
        <StepItem title="Execute" />
        <StepItem title="Concluded" />
        <StepItem title="Closed" />
      </StepsContainer>
    );
    const stepsContainerElement = getByTestId('steps-container');
    expect(stepsContainerElement.children[0]).toHaveClass('is-next-done');
    expect(stepsContainerElement.children[1]).toHaveClass('is-done');
    expect(stepsContainerElement.children[1]).not.toHaveClass('is-next-done');
    expect(stepsContainerElement.children[2]).not.toHaveClass('is-done');
    expect(stepsContainerElement.children[2]).not.toHaveClass('is-next-done');
  });