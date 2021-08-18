import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Users from './components/Users';
import { Provider } from 'react-redux'
import store from './redux/store'

const generateClassName =  createGenerateClassName({
    productionPrefix: 'users',
})

export default ( ) => { 
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Provider store={store}>
                    <Users />
                </Provider>
            </StylesProvider>
        </div>
    )
}