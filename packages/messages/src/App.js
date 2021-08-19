import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Messages from './components/Messages';

const generateClassName =  createGenerateClassName({
    productionPrefix: 'messages',
    disableGlobal: true
})

export default ( ) => { 
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Messages />
            </StylesProvider>
        </div>
    )
}