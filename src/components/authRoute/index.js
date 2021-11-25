import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

export const PrivateRouter = ({children, ...rest}) => {
    const {token} = useSelector(state => state.auth)

    let isAuthenticated = false
    if(token){
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
    const {token} = useSelector(state => state.auth)

    let isAuthenticated = false
    if(token){
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