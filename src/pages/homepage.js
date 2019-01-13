import React from 'react'
import { connect } from 'react-redux'

const homePage = () => ( <div>Home Page</div> )

export const HomePage = connect()(homePage)