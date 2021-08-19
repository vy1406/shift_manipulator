import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Dashboard from './containers/Dashboard';

const generateClassName =  createGenerateClassName({
    productionPrefix: 'db',
    disableGlobal: true
})

export default ( ) => { 
    return (
        <StylesProvider generateClassName={generateClassName}>
            <div>
                {/* <Dashboard /> */}
                dashboard app
            </div>
        </StylesProvider>
    )
}