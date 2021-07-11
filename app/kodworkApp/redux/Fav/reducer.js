import { ADD_TO_FAV, REMOVE_FROM_FAV } from '../types'

const INITIAL_STATE = {
    favouriteJobs: [],
};

export const favReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_FAV:
            return { ...state, favouriteJobs: [...state.favouriteJobs, action.payload] };
        case REMOVE_FROM_FAV:
            return {
                ...state,
                favouriteJobs: state.favouriteJobs.filter(job => action.payload !== job.id)
            }
        case "REMOVE_WHOLE_FAV_LIST":
            return INITIAL_STATE;
        default:
            return state;
    }
};