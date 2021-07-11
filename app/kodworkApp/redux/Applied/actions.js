import { SUBMIT_A_JOB } from '../types'


export const submitAJobAction = job => {
    return {
        type: SUBMIT_A_JOB,
        payload: job,
    };
};

