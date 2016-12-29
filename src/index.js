import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import 'normalize.css'
import App from './components/App'
import ListView from './components/ListView'

const About = () => (
  <span>About this blog</span>
)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={ListView} />
      <Route path="/about" component={About} />
      <Redirect from='*' to='/' />
    </Route>
  </Router>,
  document.getElementById('root')
)
