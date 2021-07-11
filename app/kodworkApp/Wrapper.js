import React from 'react'
import { Provider } from 'react-redux'

import Router from './Router'
import configureStore from './redux/store'

const store = configureStore();

const Wrapper = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

export default Wrapper
