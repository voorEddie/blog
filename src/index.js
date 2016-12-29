import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import 'normalize.css'
import App from './components/App'
import ListView from './components/ListView'

const About = () => (
  <span>About this blog</span>
)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/blog" component={App}>
      <IndexRoute component={ListView} />
      <Route path="about" component={About} />
      <Redirect from='*' to='/blog' />
    </Route>
  </Router>,
  document.getElementById('root')
)
