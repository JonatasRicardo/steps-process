import React from 'react';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';

export default { title: 'Modal' };

export const ModalActive = () => <Modal active />;
export const ModalActiveWithHeader = () => (
    <Modal active>
        <ModalHeader
            title="Engagement Process"
            subtitle="2019 Fall Oncology Advisory Board"
            label="Abandoned"
            hasCloseButton
        />
    </Modal>
);