import React from 'react'
import './style.css'
import Header from '../Header'
import Nav from '../Nav'

const App = (props) => (
  <div className="App">
    <Header />
    {props.children}
    <Nav />
  </div>
)

export default App
