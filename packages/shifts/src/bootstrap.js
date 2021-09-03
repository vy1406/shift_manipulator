import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const mount = (el, { loggedUser }) => {
    ReactDOM.render(
        <App loggedUser={loggedUser}/>, 
        el
    );
}

// in dev, in isolation
if ( process.env.NODE_ENV === 'development' ) {
    const devRoot = document.querySelector('#_shifts-dev-root')

    if ( devRoot ) {
        mount(devRoot);
    }
}

export { mount };