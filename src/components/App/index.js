import React from 'react'
import './style.css'
import Header from '../Header'
import Nav from '../Nav'

const App = (props) => (
  <div className="App">
    <Header />
    <Nav />
    <main className="Main">
      <div className="Main-inner">{props.children}</div>
    </main>
  </div>
)

export default App
