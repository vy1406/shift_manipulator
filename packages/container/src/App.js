import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './components/Header';
import Progress from './components/Progress';

import { createBrowserHistory } from 'history';
import { SIGNED_USER } from './helpers/helpers';

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
const DashboardLazy = lazy(() => import('./container/Dashboard'))
// const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const generateClassName =  createGenerateClassName({
    productionPrefix: 'container',
    disableGlobal: true
})


const history = createBrowserHistory();

export default () => {

    const [isSignedIn, setIsSignedIn] = useState(false)
    const [loggedUser, setLoggedUser] = useState(null)

    const handleOnSignedIn = () => {
        setIsSignedIn(true)
        if ( process.env.NODE_ENV === 'development' ) {
            setLoggedUser(SIGNED_USER)
        } else {
            // set fetched user.
        }
    }

    useEffect(() => {
        if ( isSignedIn ) {
            history.push('/dashboard');
        } else {
            history.push('/')
        }
    }, [isSignedIn]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth" > 
                                <AuthLazy onSignIn={() => handleOnSignedIn()} />
                            </Route>
                            <Route path="/dashboard" >
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardLazy loggedUser={loggedUser}/>
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}