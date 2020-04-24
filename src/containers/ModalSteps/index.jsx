
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import Modal from '../../components/Modal/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import StepItem from '../../components/Steps/StepItem';
import StepsContainer from '../../components/Steps/StepsContainer';

import ModalStepsActions from './ModalSteps.actions';

function ModalSteps(props) {
  const [modal, setModal] = React.useState(false);
  const dispatch = useDispatch();
  const {
    currentStep,
    steps,
  } = useSelector(state => state.ModalSteps);

  const modalToggle = () => {
    setModal(!modal);
  }

  const nextStep = () => {
      dispatch(ModalStepsActions.nextStep());
  }

  const prevStep = () => {
      dispatch(ModalStepsActions.prevStep());
  }

  return (
    <div>
        <Button onClick={modalToggle}>Open Modal</Button>
        <Modal active={modal}>
            <ModalHeader
                title="Engagement Process"
                subtitle="2019 Fall Oncology Advisory Board"
                label="Abandoned"
                hasCloseButton
                onCloseButtonClick={modalToggle}
            />
            <StepsContainer currentStep={currentStep} >
                {steps.map(({
                    id,
                    statusName,
                    statusDate,
                }) => <StepItem
                        key={id}
                        title={id}
                        statusName={statusName}
                        statusDate={statusDate}
                    />
                )}
            </StepsContainer>
            <footer style={{ textAlign: 'right', padding: '20px 0' }}>
                <Button onClick={prevStep} light>Reinstate</Button>
                <Button onClick={nextStep}>Draft revisions</Button>
            </footer>
        </Modal>
    </div>
  );
}

export default ModalSteps;