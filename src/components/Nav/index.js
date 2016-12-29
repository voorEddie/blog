import React from 'react'
import { Link } from 'react-router'
import './style.css'

const Nav = () => (
  <nav className="Nav">
    <ul className="Nav-list">
      <li className="Nav-list-item"><Link to="/">Blog</Link></li>
      <li className="Nav-list-item"><Link to="/about">About</Link></li>
    </ul>
  </nav>
)

export default Nav
