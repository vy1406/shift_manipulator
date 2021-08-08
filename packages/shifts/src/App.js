import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Shifts from './components/Shifts';

const generateClassName =  createGenerateClassName({
    productionPrefix: 'shifts',
})

export default ( ) => { 
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Shifts />
            </StylesProvider>
        </div>
    )
}