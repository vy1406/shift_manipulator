import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Shifts from './components/Shifts';

const generateClassName =  createGenerateClassName({
    productionPrefix: 'shifts-',
    disableGlobal: true
}, )

export default ( {loggedUser} ) => { 
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Shifts loggedUser={loggedUser}/>
            </StylesProvider>
        </div>
    )
}