import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../Modal';

describe('<Modal/>', () => {
  it('renders Steps components', () => {
    const { getByTestId } = render(
      <Modal />
    );
    const modalElement = getByTestId('modal');
    expect(modalElement).toBeDefined();
  });

  it('Snapshot', () => {
    const { getByTestId } = render(
        <Modal />
    );
    const modalElement = getByTestId('modal');
    expect(modalElement).toMatchSnapshot();
  });
})
