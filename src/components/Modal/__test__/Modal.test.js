import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';

describe('<Modal/>', () => {
  it('renders Modal components', () => {
    const { getByTestId } = render(
      <Modal />
    );
    const modalElement = getByTestId('modal');
    expect(modalElement).toBeDefined();
  });

  it('Snapshot Modal', () => {
    const { getByTestId } = render(
        <Modal />
    );
    const modalElement = getByTestId('modal');
    expect(modalElement).toMatchSnapshot();
  });

  it('Snapshot Modal with header', () => {
    const { getByTestId } = render(
        <Modal>
          <ModalHeader
              title="Engagement Process"
              subtitle="2019 Fall Oncology Advisory Board"
              label="Abandoned"
              hasCloseButton
          />
        </Modal>
    );
    const modalElement = getByTestId('modal');
    expect(modalElement).toMatchSnapshot();
  });
})
