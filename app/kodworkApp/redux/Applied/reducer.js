import { SUBMIT_A_JOB } from '../types'

const INITIAL_STATE = {
    submittedJobs: [],
};

export const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUBMIT_A_JOB:
            return { ...state, submittedJobs: [...state.submittedJobs, action.payload] };
        case "REMOVE_WHOLE_APPLIED_LIST":
            return INITIAL_STATE;
        default:
            return state;
    }
};