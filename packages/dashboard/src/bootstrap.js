import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const mount = (el) => {
    ReactDOM.render(
        <App />, 
        el
    );

}

// in dev, in isolation
if ( process.env.NODE_ENV === 'development' ) {
    const devRoot = document.querySelector('#_dashboard-dev-root')

    if ( devRoot ) {
        mount(devRoot);
    }
}

export { mount };