import { ADD_TO_FAV, REMOVE_FROM_FAV } from '../types'


export const addToFavAction = job => {
    return {
        type: ADD_TO_FAV,
        payload: job,
    };
};

export const removeFromFavAction = (id) => {
    return {
        type: REMOVE_FROM_FAV,
        payload: id
    };
};