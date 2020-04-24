export default function reducer(state = {
  currentStep: 2,
  steps: [
      {
        id: 'Draft',
        statusName: 'Created on',
        statusDate: '01/31/2020',
      },
      {
        id: 'Pending Approval',
        statusName: 'Approval sent',
        statusDate: '02/14/2020',
      },
      {
        id: 'Approved',
        statusName: 'Abandoned on',
        statusDate: '02/20/2020',
      },
      {
        id: 'Execute'
      },
      {
        id: 'Concluded'
      },
      {
        id: 'Closed'
      },
  ]
}, action) {
  switch (action.type) {
    case 'UPDATE_STEPS': {
      return {
        ...state,
        steps: action.payload,
      };
    }
    case 'UPDATE_CURRENT_STEP': {
      return {
        ...state,
        currentStep: action.payload,
      };
    }
    case 'NEXT_STEP': {
      const currentStep = state.currentStep < state.steps.length ? state.currentStep+1 : state.steps.length;
      return {
        ...state,
        currentStep,
      };
    }
    case 'PREV_STEP': {
      const currentStep = state.currentStep > 1 ? state.currentStep-1 : 1;
      return {
        ...state,
        currentStep,
      };
    }

    default: {
      return state;
    }
  }
}
