import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import rootRoute from './route.config'
import 'normalize.css'

ReactDOM.render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('root')
)
