import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

export const PrivateRouter = ({children, ...rest}) => {
    const loggedIn = useSelector(state => state.auth)

    let isAuthenticated = false
    if(loggedIn === true){
        isAuthenticated = true
    }

    return (
        <Route
            {...rest}
            render={() => {
                return (isAuthenticated
                ? children
                : <Redirect to="/login" />)
            }}
        />
    )
}

export const UnprotectedRoute = ({children, ...rest}) => {
    const loggedIn = useSelector(state => state.auth)

    let isAuthenticated = false
    if(loggedIn){
        isAuthenticated = true
    }
    return (
        <Route
            {...rest}
            render={() => {
                return (isAuthenticated
                ? <Redirect to="/" />
                : children)
            }}
        />
    )
}