import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Messages from './components/Messages';
import { Provider } from 'react-redux'
import store from './redux/store'

const generateClassName =  createGenerateClassName({
    productionPrefix: 'messages',
    disableGlobal: true
})

export default ({ loggedUser }) => { 
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Provider store={store}>
                    <Messages loggedUser={loggedUser}/>
                </Provider>
            </StylesProvider>
        </div>
    )
}