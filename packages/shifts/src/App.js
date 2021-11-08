import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Shifts from './components/Shifts';
import { Provider } from 'react-redux'
import store from './redux/store'

const generateClassName = createGenerateClassName({
    productionPrefix: 'shifts-',
    disableGlobal: true
})

export default ({ loggedUser }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Provider store={store}>
                    <Shifts loggedUser={loggedUser} />
                </Provider>
            </StylesProvider>
        </div>
    )
}