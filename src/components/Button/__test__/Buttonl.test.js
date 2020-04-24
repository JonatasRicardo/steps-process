import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

describe('<Button/>', () => {
  it('renders Button components', () => {
    const { getByTestId } = render(
      <Button />
    );
    const buttonElement = getByTestId('button');
    expect(buttonElement).toBeDefined();
  });
  it('Button children', () => {
    const { getByText } = render(
      <Button>
        Click me
      </Button>
    );
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeDefined();
    expect(buttonElement).toMatchSnapshot();
  });
  it('Button light', () => {
    const { getByTestId } = render(
      <Button light>
        Click me
      </Button>
    );
    const buttonElement = getByTestId('button');
    expect(buttonElement).toHaveClass('light');
    expect(buttonElement).toMatchSnapshot();
  });


})
