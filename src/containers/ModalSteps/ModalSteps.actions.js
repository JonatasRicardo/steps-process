
/**
 * Obtem todos os projetos ativos
 *
 */
export function nextStep() {
  return (dispatch) => {
    dispatch({ type: 'NEXT_STEP' });
  }
}
export function prevStep() {
  return (dispatch) => {
    dispatch({ type: 'PREV_STEP' });
  }
}
export function setStep(step) {
  return (dispatch) => {
    const stepNumber = Number(step);
    if (stepNumber) {
        dispatch({ type: 'UPDATE_CURRENT_STEP', payload: stepNumber });
    }
  }
}

export default {
  nextStep,
  prevStep,
  setStep,
}
