import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';


const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });


    if ( onNavigate ) {
        // if you remove this if, and run in isolation the marketing app, it will fail.
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} onSignIn={onSignIn}/>, 
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if ( pathname !== nextPathname ){
                history.push(nextPathname)
            }
        }
    }
}
// in dev, in isolation
if ( process.env.NODE_ENV === 'development' ) {
    const devRoot = document.querySelector('#_auth-dev-root')

    if ( devRoot ) {
        mount(devRoot, { defaultHistory: createBrowserHistory() } );
    }
}

export { mount };