import { createStore, combineReducers } from 'redux'

import { favReducer } from './Fav/reducer';
import { appReducer } from './Applied/reducer';


const globalReducer = combineReducers({
    fav: favReducer,
    app: appReducer,
});


function configureStore() {
    return createStore(globalReducer)
}

export default configureStore


