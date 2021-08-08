import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Dashboard from './containers/Dashboard';

const generateClassName =  createGenerateClassName({
    productionPrefix: 'db-',
})

export default ( ) => { 
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Dashboard />
            </StylesProvider>
        </div>
    )
}