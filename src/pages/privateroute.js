import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'

const privateRoute = ({component: Component, isLoggedIn, ...props}) => (
    <Route {...props}
        render = { props => 
            isLoggedIn
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: { from: props.location }}} />
        }
    />
)

const mapStateToProps = (state) => ({
    isLoggedIn: state.login.isLoggedIn
})

export const PrivateRoute = withRouter(connect(mapStateToProps)(privateRoute))