import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { refdata } from './redux/refdata/refdata'
import { Provider } from 'react-redux'
import { IndexPage } from './pages/indexpage'

const reduxstore = createStore(refdata)

const App = () => (
  <Provider store={reduxstore}>
    <IndexPage/>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("index"));
