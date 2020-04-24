import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('renders App components', () => {
    const { getByTestId } = render(
      <App />
    );
    const appContainer = getByTestId('app');
    expect(appContainer).toBeDefined();
  });

  it('Should open modal when button has been clicked', async () => {
    const { getByTestId } = render(
      <App />
    );

    const modalElement = getByTestId('modal');
    expect(modalElement).not.toHaveClass('is-active');

    const btnOpenModal = getByTestId('btn-open-modal');
    expect(btnOpenModal).toBeDefined();
    
    fireEvent.click(btnOpenModal);
    const modalActiveElement = await waitForElement(() => getByTestId('modal'))
    expect(modalActiveElement).toHaveClass('is-active');
  });

  it('Should close modal when button has been clicked', async () => {
    const { getByTestId } = render(
      <App />
    );

    const btnOpenModal = getByTestId('btn-open-modal');
    expect(btnOpenModal).toBeDefined();
    fireEvent.click(btnOpenModal);

    const btnCloseModal = await waitForElement(() => getByTestId('btn-close-modal'))
    fireEvent.click(btnCloseModal);

    const modalClosedElement = await waitForElement(() => getByTestId('modal'))
    expect(modalClosedElement).not.toHaveClass('is-active');

  });

});
