import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Users from './components/Users';

const generateClassName =  createGenerateClassName({
    productionPrefix: 'users-',
})

export default ( ) => { 
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Users />
            </StylesProvider>
        </div>
    )
}