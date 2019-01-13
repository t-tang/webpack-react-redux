import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { HomePage } from './homepage'
import { LoginPage } from './loginpage'
import { LogoutPage } from './logoutpage'
import { PrivateRoute } from './privateroute'

const indexPage = () => (
  <Router>
    <div>
      <PrivateRoute exact path='/' component={HomePage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/logout' component={LogoutPage}/>
    </div>
  </Router>
)

export const IndexPage = connect()(indexPage)
